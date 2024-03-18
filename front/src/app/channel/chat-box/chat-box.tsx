import { PropsWithChildren, useEffect } from 'react';
import { ChatItem } from './components/chat-item';
import { useParams } from 'react-router-dom';
import { useChatChannelQuery } from 'src/graphql-request';
import { Loading } from 'src/app/components/loading/loading';
import { socket } from 'src/app/socket-client';

export function ChatBox({}: ChatBoxProps) {
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
      <ul className="px-4 space-y-2 flex flex-col-reverse h-full">
        {data?.chatChannels?.map((message) => (
          <ChatItem key={message?.id} text={message?.content || ''} />
        ))}
        {/* <li>
          <ChatItem text="Lorem ipsum dolor sit amet consectetur adipisicing elit.Saepe, quis?" />
        </li>
        <li>
          <ChatItem text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odit voluptatum animi doloremque rem facere quia rerum laborum ducimus! Dolorem beatae consectetur dolores quisquam ex nostrum laborum accusantium repellat numquam ipsam magnam odio non, nesciunt expedita! Obcaecati distinctio itaque quaerat minus eius voluptate repudiandae odit neque, cupiditate dignissimos repellat incidunt quisquam temporibus! Corrupti esse ab iure, deserunt officiis natus inventore assumenda, odio doloribus quam quas quo commodi ad porro rem numquam fuga possimus. Perferendis exercitationem quia ducimus iusto atque dolores amet quidem nesciunt eaque ipsum quos itaque dolor recusandae dicta eum neque, rerum quibusdam. Voluptatum minus tempore exercitationem rerum beatae!" />
        </li>
        <li>
          <ChatItem text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odit voluptatum animi doloremque rem facere quia rerum laborum ducimus! Dolorem beatae consectetur dolores quisquam ex nostrum laborum accusantium repellat numquam ipsam magnam odio non, nesciunt expedita! Obcaecati distinctio itaque quaerat minus eius voluptate repudiandae odit neque, cupiditate dignissimos repellat incidunt quisquam temporibus! Corrupti esse ab iure, deserunt officiis natus inventore assumenda, odio doloribus quam quas quo commodi ad porro rem numquam fuga possimus. Perferendis exercitationem quia ducimus iusto atque dolores amet quidem nesciunt eaque ipsum quos itaque dolor recusandae dicta eum neque, rerum quibusdam. Voluptatum minus tempore exercitationem rerum beatae!" />
        </li>
        <li>
          <ChatItem text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odit voluptatum animi doloremque rem facere quia rerum laborum ducimus! Dolorem beatae consectetur dolores quisquam ex nostrum laborum accusantium repellat numquam ipsam magnam odio non, nesciunt expedita! Obcaecati distinctio itaque quaerat minus eius voluptate repudiandae odit neque, cupiditate dignissimos repellat incidunt quisquam temporibus! Corrupti esse ab iure, deserunt officiis natus inventore assumenda, odio doloribus quam quas quo commodi ad porro rem numquam fuga possimus. Perferendis exercitationem quia ducimus iusto atque dolores amet quidem nesciunt eaque ipsum quos itaque dolor recusandae dicta eum neque, rerum quibusdam. Voluptatum minus tempore exercitationem rerum beatae!" />
        </li>
        <li>
          <ChatItem text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odit voluptatum animi doloremque rem facere quia rerum laborum ducimus! Dolorem beatae consectetur dolores quisquam ex nostrum laborum accusantium repellat numquam ipsam magnam odio non, nesciunt expedita! Obcaecati distinctio itaque quaerat minus eius voluptate repudiandae odit neque, cupiditate dignissimos repellat incidunt quisquam temporibus! Corrupti esse ab iure, deserunt officiis natus inventore assumenda, odio doloribus quam quas quo commodi ad porro rem numquam fuga possimus. Perferendis exercitationem quia ducimus iusto atque dolores amet quidem nesciunt eaque ipsum quos itaque dolor recusandae dicta eum neque, rerum quibusdam. Voluptatum minus tempore exercitationem rerum beatae!" />
        </li>
        <li>
          <ChatItem text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odit voluptatum animi doloremque rem facere quia rerum laborum ducimus! Dolorem beatae consectetur dolores quisquam ex nostrum laborum accusantium repellat numquam ipsam magnam odio non, nesciunt expedita! Obcaecati distinctio itaque quaerat minus eius voluptate repudiandae odit neque, cupiditate dignissimos repellat incidunt quisquam temporibus! Corrupti esse ab iure, deserunt officiis natus inventore assumenda, odio doloribus quam quas quo commodi ad porro rem numquam fuga possimus. Perferendis exercitationem quia ducimus iusto atque dolores amet quidem nesciunt eaque ipsum quos itaque dolor recusandae dicta eum neque, rerum quibusdam. Voluptatum minus tempore exercitationem rerum beatae!" />
        </li> */}
      </ul>
    </div>
  );
}

type ChatBoxProps = PropsWithChildren<{}>;
