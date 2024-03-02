import { Module } from '@nestjs/common';
import { ChatChannelService } from './chat-channel.service';
import { ChatChannelResolver } from './chat-channel.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ChatChannelResolver, ChatChannelService, PrismaService],
})
export class ChatChannelModule {}
