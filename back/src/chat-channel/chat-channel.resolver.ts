import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ChatChannelService } from './chat-channel.service';
import {
  CreateChatChannelInput,
  FindChatChannelGroupedInput,
  FindChatChannelInput,
  UpdateChatChannelInput,
} from 'src/graphql';

@Resolver('ChatChannel')
export class ChatChannelResolver {
  constructor(private readonly chatChannelService: ChatChannelService) {}

  @Mutation('createChatChannel')
  create(
    @Args('createChatChannelInput')
    createChatChannelInput: CreateChatChannelInput,
  ) {
    return this.chatChannelService.create(createChatChannelInput);
  }

  @Query('chatChannels')
  findAll(
    @Args('findChatChannelInput')
    query: FindChatChannelInput,
  ) {
    return this.chatChannelService.findAll(query);
  }

  @Query('chatChannelsGrouped')
  async findChatGrouped(
    @Args('findChatChannelGroupedInput')
    query: FindChatChannelGroupedInput,
  ) {
    const seen = await this.chatChannelService.findAll({
      ...query,
      seen: true,
    });
    const notSeen = await this.chatChannelService.findAll({
      ...query,
      seen: false,
    });

    return { seen, notSeen };
  }

  @Query('chatChannel')
  findOne(@Args('id') id: number) {
    return this.chatChannelService.findOne(id);
  }

  @Mutation('updateChatChannel')
  update(
    @Args('updateChatChannelInput')
    updateChatChannelInput: UpdateChatChannelInput,
  ) {
    return this.chatChannelService.update(
      updateChatChannelInput.id,
      updateChatChannelInput,
    );
  }

  @Mutation('removeChatChannel')
  remove(@Args('id') id: number) {
    return this.chatChannelService.remove(id);
  }
}
