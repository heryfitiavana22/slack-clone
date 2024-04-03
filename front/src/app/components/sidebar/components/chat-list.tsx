import { PropsWithChildren } from 'react';
import { DropDownItem, NavDropdown } from './nav-dropdown';

export function ChatList({}: ChatListProps) {
  const dropdownItems: DropDownItem[] = [
    { id: 1, name: 'hery hery', href: '#' },
    { id: 2, name: 'go-max', href: '#' },
  ];

  return (
    <li>
      <NavDropdown
        name={'Message'}
        dropdownItems={dropdownItems}
        addCaption={'Ajouter des collègues'}
        activeChannelId={null}
      />
    </li>
  );
}

type ChatListProps = PropsWithChildren<{}>;
