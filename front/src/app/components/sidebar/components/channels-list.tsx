import { PropsWithChildren, useEffect, useState } from 'react';
import { DropDownItem, NavDropdown } from './nav-dropdown';
import { useChannelsQuery } from 'src/graphql-request';
import { ROUTES } from 'src/app/routes';
import { useWorkspace } from 'src/app/workspace/use-workspace';
import { useParams } from 'react-router-dom';
import { useChannels } from 'src/app/channel/use-channels';
import { ModalCreateChannel } from 'src/app/channel/create/modal-create-channel';
import { useAuth } from 'src/app/auth/use-auth';
import { socket } from 'src/app/socket-client';

export function ChannelsList({}: ChannelsListProps) {
  const { id: workspaceId } = useWorkspace();
  const { user } = useAuth();
  const { channelId: activeChannelId } = useParams();
  const { setChannels } = useChannels();
  const [showModal, setShowModal] = useState(false);
  const { data, refetch } = useChannelsQuery({
    variables: { workspaceId, hasUnRead: true, userId: user?.id },
  });
  let dropdownItems: DropDownItem[] = data
    ? data.channels.map((ch) => ({
        id: ch?.id || 0,
        name: ch?.name || '',
        href: ROUTES.channel(ch?.id || 0),
        hasUnRead: ch?.hasUnRead || false,
      }))
    : [];

  useEffect(() => {
    function onRefetch() {
      refetch();
    }
    socket.on('refetch_chatchannel_unread', onRefetch);
    return () => {
      socket.off('refetch_chatchannel_unread', onRefetch);
    };
  }, []);

  useEffect(() => {
    if (data) {
      setChannels(
        data.channels.map((ch) => ({ id: ch?.id || 0, name: ch?.name || '' })),
      );
      data.channels.forEach((ch) =>
        socket.emit('connected_on_channel', ch?.id),
      );
    }
    return () => {
      if (data)
        data.channels.forEach((ch) =>
          socket.emit('disconnected_on_channel', ch?.id),
        );
    };
  }, [data]);

  return (
    <li>
      <NavDropdown
        name={'Canaux'}
        dropdownItems={dropdownItems}
        addCaption={'Ajouter des canaux'}
        activeChannelId={Number(activeChannelId)}
        onClickAdd={() => setShowModal(true)}
      />
      <ModalCreateChannel
        show={showModal}
        onClose={() => setShowModal(false)}
        workspaceId={workspaceId}
      />
    </li>
  );
}

type ChannelsListProps = PropsWithChildren<{}>;
