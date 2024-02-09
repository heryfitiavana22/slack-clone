import { PropsWithChildren } from 'react';
import { ChannelsList } from './components/channels-list';
import { ChatList } from './components/chat-list';
import { ChevronDown } from '../icons/chevron-down';
import { useWorkspace } from 'src/app/workspace/use-workspace';

export function Sidebar({}: SidebarProps) {
  const workspace = useWorkspace();
  return (
    <div className="h-full px-3 py-4 overflow-y-auto bg-primary-500 text-gray-400 whitespace-nowrap text-ellipsis">
      <div className="p-2">
        <div className="flex items-center text-white w-min p-1 rounded-md hover:bg-primary-400">
          <span className="font-bold">{workspace.name}</span>
          <ChevronDown />
        </div>
      </div>
      <ul className="space-y-2 font-medium">
        <ChannelsList />
        <ChatList />
      </ul>
    </div>
  );
}

type SidebarProps = PropsWithChildren<{}>;
