import { PropsWithChildren, useState } from 'react';
import { ChatBox } from './chat-box/chat-box';
import { RichTextEditor } from '../components/rich-text-editor/rich-text-editor';
import { H6 } from '../components/typography/typography';
import { useParams } from 'react-router-dom';
import { useChannelQuery } from 'src/graphql-request';
import { useWorkspace } from '../workspace/use-workspace';
import { Loading } from '../components/loading/loading';
import { socket } from '../socket-client';
import { useAuth } from '../auth/use-auth';

export function Channel({}: ChannelProps) {
  const [value, setValue] = useState('');
  const { id: workspaceId } = useWorkspace();
  const { channelId } = useParams();
  const { user } = useAuth();
  const { data, loading, error } = useChannelQuery({
    variables: { id: Number(channelId), workspaceId },
  });

  if (loading) return <Loading />;

  if (error || !data) return <div>Canaux indisponible</div>;

  return (
    <div className="grid grid-rows-[56px_1fr_auto] h-full">
      <div className="border">
        <H6>
          # {data.channelQuery?.name}
          <div className="bg-red-00">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 32 32"
              className="bg-white rounded-full"
              // fill="#000"
              // fillRule="nonzero"
            >
              <title>{'chevron-left-circle'}</title>
              <path
                fill="#000"
                fillRule="evenodd"
                d="M20.535 23.12c.391.39.391 1.02 0 1.42a1 1 0 0 1-1.414 0l-7.656-7.66a.984.984 0 0 1-.26-.88.984.984 0 0 1 .26-.88l7.656-7.66a1 1 0 0 1 1.414 0c.391.4.391 1.03 0 1.42L13.414 16l7.121 7.12ZM16 0C7.163 0 0 7.16 0 16s7.163 16 16 16 16-7.16 16-16S24.837 0 16 0Z"
              />
            </svg>
          </div>
        </H6>
      </div>
      <div className="overflow-auto">
        <ChatBox />
      </div>
      <div className="px-4">
        <RichTextEditor
          value={value}
          setValue={setValue}
          onSubmit={() => {
            if (value.length == 0) return;
            socket.emit('new_message', {
              channelId: Number(channelId),
              senderId: user?.id,
              content: value,
            });
            setValue('');
          }}
        />
      </div>
    </div>
  );
}

type ChannelProps = PropsWithChildren<{}>;
