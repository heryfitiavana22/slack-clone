import { PropsWithChildren, useEffect } from 'react';
import { ChatItem } from './components/chat-item';
import { useParams } from 'react-router-dom';
import {
  ChatChannel,
  useChatChannelGroupedQuery,
  useUpdatChatChannelMutation,
} from 'src/graphql-request';
import { Loading } from 'src/app/components/loading/loading';
import { socket } from 'src/app/socket-client';
import { H3 } from 'src/app/components/typography/typography';
import { useAuth } from 'src/app/auth/use-auth';

export function ChatBox({ channelName }: ChatBoxProps) {
  const { channelId } = useParams();
  const { user } = useAuth();
  const { data, error, loading, refetch } = useChatChannelGroupedQuery({
    variables: { channelId: Number(channelId), userId: user?.id! },
  });
  const [updateChatChannel, {}] = useUpdatChatChannelMutation();

  useEffect(() => {
    data?.chatChannelsGrouped.notSeen.forEach(async (chat) => {
      if (!chat) return;
      const isSeen = chat.seenByUsers?.find((el) => el?.id == user?.id);
      if (!isSeen) {
        await updateChatChannel({
          variables: {
            chatChannelId: chat.id,
            usersIds: user ? [user.id] : [],
          },
        });
        socket.emit('chatchannel_read', channelId);
      }
    });
    const onNewMessage = async (message: ChatChannel) => {
      refetch();
      console.log(message);
    };
    socket.on('new_message', onNewMessage);
    return () => {
      socket.off('new_message', onNewMessage);
    };
  }, [data]);

  if (loading) return <Loading />;

  if (error) return <div>Erreur</div>;
  const notSeenLength = data?.chatChannelsGrouped.notSeen.length || 0;

  return (
    <div className="py-4 h-full">
      <ul className="px-4 space-y-2 flex flex-col-reverse h-full overflow-auto">
        {data?.chatChannelsGrouped.notSeen?.map((message, k) => (
          <li key={k}>
            <ChatItem key={message?.id} text={message?.content || ''} />
          </li>
        ))}
        {notSeenLength > 0 && (
          <li>
            <div className="flex items-center">
              <div className="border border-danger-400 w-full"></div>
              <div className="text-danger-400 ml-1">Nouveau</div>
            </div>
          </li>
        )}
        {data?.chatChannelsGrouped.seen?.map((message, k) => (
          <li key={k}>
            <ChatItem key={message?.id} text={message?.content || ''} />
          </li>
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
