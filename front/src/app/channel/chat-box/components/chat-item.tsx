export function ChatItem({ text }: ChatItemProps) {
  return (
    <div className="flex gap-2">
      <div className="w-10 h-10 rounded-md bg-blue-500"></div>
      <div className="flex flex-col w-full">
        <span className="font-bold">hery hery</span>
        <span className="">{text}</span>
      </div>
    </div>
  );
}

type ChatItemProps = {
  text: string;
};
