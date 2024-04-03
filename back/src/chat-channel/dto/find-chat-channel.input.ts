import { FindChatChannelInput } from "src/graphql";

export class FindChatChannelDto extends FindChatChannelInput {
  userId?: number;
  seen?: boolean;
}
