import { PropsWithChildren, useEffect } from 'react';
import { NavDropdown } from './nav-dropdown';
import { useChannelsQuery } from 'src/graphql-request';
import { ROUTES } from 'src/app/routes';
import { useWorkspace } from 'src/app/workspace/use-workspace';
import { useParams } from 'react-router-dom';
import { useChannels } from 'src/app/channel/use-channels';

export function ChannelsList({}: ChannelsListProps) {
  const { id } = useWorkspace();
  const { channelId: activeChannelId } = useParams();
  const { setChannels } = useChannels();
  const { data } = useChannelsQuery({ variables: { workspaceId: id } });
  let dropdownItems = data
    ? data.channels.map((ch) => ({
        id: ch?.id || 0,
        name: ch?.name || '',
        href: ROUTES.channel(ch?.id || 0),
      }))
    : [];

  useEffect(() => {
    if (data)
      setChannels(
        data.channels.map((ch) => ({ id: ch?.id || 0, name: ch?.name || '' })),
      );
  }, [data]);

  return (
    <li>
      <NavDropdown
        name={'Canaux'}
        dropdownItems={dropdownItems}
        addCaption={'Ajouter des canaux'}
        activeChannelId={Number(activeChannelId)}
      />
    </li>
  );
}

type ChannelsListProps = PropsWithChildren<{}>;
