import { PropsWithChildren } from 'react';
import { NavDropdown } from './nav-dropdown';
import { useChannelsQuery } from 'src/graphql-request';
import { ROUTES } from 'src/app/routes';
import { useWorkspace } from 'src/app/workspace/use-workspace';

export function ChannelsList({}: ChannelsListProps) {
  const { id } = useWorkspace();
  const { data } = useChannelsQuery({ variables: { workspaceId: id } });
  let dropdownItems = data
    ? data.channels.map((ch) => ({
        name: ch?.name || '',
        href: ROUTES.channel(ch?.id || 0),
      }))
    : [];

  return (
    <li>
      <NavDropdown
        name={'Canaux'}
        dropdownItems={dropdownItems}
        addCaption={'Ajouter des canaux'}
      />
    </li>
  );
}

type ChannelsListProps = PropsWithChildren<{}>;
