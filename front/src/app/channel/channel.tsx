import { PropsWithChildren, useState } from "react";
import { ChatList } from "./chat-list/chat-list";
import { RichTextEditor } from "../components/rich-text-editor/rich-text-editor";
import { H6 } from "../components/typography/typography";

export function Channel({}: ChannelProps) {
    const [value, setValue] = useState("");

    return (
        <div className="grid grid-rows-[56px_1fr_auto] h-full">
            <div className="border">
                <H6># example</H6>
            </div>
            <div className="overflow-auto">
                <ChatList />
            </div>
            <div className="px-4">
                <RichTextEditor value={value} setValue={setValue} />
            </div>
        </div>
    );
}

type ChannelProps = PropsWithChildren<{}>;
