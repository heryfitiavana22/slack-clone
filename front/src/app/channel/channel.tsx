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
import { ChevronDown } from '../components/icons/chevron-down';

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
  const channelName = data.channelQuery?.name || '';

  return (
    <div className="grid grid-rows-[56px_1fr_auto] h-full">
      <div className="border flex items-center px-4">
        <H6 className="flex gap-2 items-center">
          # {channelName}
          <ChevronDown />
        </H6>
      </div>
      <div className="overflow-auto">
        <ChatBox channelName={channelName} />
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
