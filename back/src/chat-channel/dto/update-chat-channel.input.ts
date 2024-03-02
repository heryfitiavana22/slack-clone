import { CreateChatChannelInput } from './create-chat-channel.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateChatChannelInput extends PartialType(CreateChatChannelInput) {
  id: number;
}
