import { PropsWithChildren, useState } from "react";
import { ChatList } from "./chat-list/chat-list";
import { RichTextEditor } from "../components/rich-text-editor/rich-text-editor";

export function Channel({}: ChannelProps) {
    const [value, setValue] = useState("");

    return (
        <div>
            <ChatList />
            <div className="px-4">
                <RichTextEditor value={value} setValue={setValue} />
            </div>
        </div>
    );
}

type ChannelProps = PropsWithChildren<{}>;
