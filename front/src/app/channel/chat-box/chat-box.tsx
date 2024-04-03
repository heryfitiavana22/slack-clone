import { PropsWithChildren, useEffect } from 'react';
import { ChatItem } from './components/chat-item';
import { useParams } from 'react-router-dom';
import { useChatChannelQuery } from 'src/graphql-request';
import { Loading } from 'src/app/components/loading/loading';
import { socket } from 'src/app/socket-client';
import { H3 } from 'src/app/components/typography/typography';

export function ChatBox({ channelName }: ChatBoxProps) {
  const { channelId } = useParams();
  const { data, error, loading, refetch } = useChatChannelQuery({
    variables: { channelId: Number(channelId) },
  });

  useEffect(() => {
    if (loading || error) return;
    socket.emit('connected_on_channel', channelId);
    socket.on('new_message', refetch);
    return () => {
      socket.off('new_message', refetch);
    };
  }, [loading, error]);

  if (loading) return <Loading />;

  if (error) return <div>Erreur</div>;

  return (
    <div className="py-4 h-full">
      <ul className="px-4 space-y-2 flex flex-col-reverse h-full overflow-auto">
        {data?.chatChannels?.map((message) => (
          <ChatItem key={message?.id} text={message?.content || ''} />
        ))}
        <li>
          <H3 className="font-bold mb-4">
            <span className="font-medium">👋</span> Bienvenue dans le canal{' '}
            <span className="font-medium">#</span> {channelName}
          </H3>
        </li>
      </ul>
    </div>
  );
}

type ChatBoxProps = PropsWithChildren<{
  channelName: string;
}>;
