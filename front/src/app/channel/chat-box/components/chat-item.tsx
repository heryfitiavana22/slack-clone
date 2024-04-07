export function ChatItem({ text }: ChatItemProps) {
  return (
    <div className="flex gap-2">
      <div className="w-10 h-10 rounded-md bg-blue-500"></div>
      <div className="flex flex-col w-full">
        <div className="font-bold">hery hery</div>
        <div className="chat-text" dangerouslySetInnerHTML={{ __html: text }}></div>
      </div>
    </div>
  );
}

type ChatItemProps = {
  text: string;
};
