import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ChannelService } from './channel.service';
import {
  CreateChannelInput,
  FindManyChannelInput,
  UpdateChannelInput,
} from 'src/graphql';

@Resolver('Channel')
export class ChannelResolver {
  constructor(private readonly channelService: ChannelService) {}

  @Mutation('createChannel')
  create(@Args('createChannelInput') createChannelInput: CreateChannelInput) {
    return this.channelService.create(createChannelInput);
  }

  @Query('channels')
  findAll(@Args('findManyChannelInput') query: FindManyChannelInput) {
    return this.channelService.findAll(query);
  }

  @Query('channel')
  findOne(@Args('id') id: number) {
    return this.channelService.findOne(id);
  }

  @Mutation('updateChannel')
  update(@Args('updateChannelInput') updateChannelInput: UpdateChannelInput) {
    return this.channelService.update(
      updateChannelInput.id,
      updateChannelInput,
    );
  }

  @Mutation('removeChannel')
  remove(@Args('id') id: number) {
    return this.channelService.remove(id);
  }
}
