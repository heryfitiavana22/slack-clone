import { Module } from '@nestjs/common';
import { ChatChannelService } from './chat-channel.service';
import { ChatChannelResolver } from './chat-channel.resolver';
import { PrismaService } from 'src/prisma.service';
import { ChatChannelGateway } from './chat-channel.gateway';

@Module({
  providers: [
    ChatChannelResolver,
    ChatChannelService,
    PrismaService,
    ChatChannelGateway,
  ],
})
export class ChatChannelModule {}
