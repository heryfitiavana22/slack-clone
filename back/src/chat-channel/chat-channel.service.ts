import { Injectable } from '@nestjs/common';
import {
  CreateChatChannelInput,
  FindChatChannelGroupedInput,
  FindChatChannelInput,
  UpdateChatChannelInput,
} from 'src/graphql';
import { purify } from 'src/helpers/dom-purify';
import { PrismaService } from 'src/prisma.service';
import { FindChatChannelDto } from './dto/find-chat-channel.input';
import { Prisma } from '@prisma/client';

const ROWS = 10;
@Injectable()
export class ChatChannelService {
  constructor(private prisma: PrismaService) {}
  create(createChatChannelInput: CreateChatChannelInput) {
    const {
      channelId,
      senderId,
      content,
      seenByUsersIds = [],
      ...chatChannel
    } = createChatChannelInput;
    return this.prisma.chatChannel.create({
      data: {
        ...chatChannel,
        content: purify.sanitize(content),
        channel: { connect: { id: channelId } },
        sender: { connect: { id: senderId } },
        seenByUsers: { connect: seenByUsersIds.map((id) => ({ id })) },
      },
    });
  }

  findAll(findChatChannelInput?: FindChatChannelDto) {
    const {
      page = 0,
      userId,
      seen,
      ...whereChatChannel
    } = findChatChannelInput;
    let where: Prisma.ChatChannelWhereInput = { ...whereChatChannel };
    if (userId) {
      if (seen) where.seenByUsers = { some: { id: userId } };
      else where.seenByUsers = { none: { id: userId } };
    }

    return this.prisma.chatChannel.findMany({
      where: { ...where },
      include: { sender: true, seenByUsers: true },
      skip: ROWS * page,
      take: ROWS,
      orderBy: { createdAt: 'desc' },
    });
  }

  findById(id: number) {
    return this.prisma.chatChannel.findUnique({ where: { id } });
  }

  findOne(id: number) {
    return this.prisma.chatChannel.findUnique({ where: { id } });
  }

  update(id: number, updateChatChannelInput: UpdateChatChannelInput) {
    const { usersIds = [], ...chatChannel } = updateChatChannelInput;

    return this.prisma.chatChannel.update({
      where: { id },
      data: {
        ...chatChannel,
        seenByUsers: { connect: usersIds.map((id) => ({ id })) },
      },
    });
  }

  remove(id: number) {
    return this.prisma.chatChannel.delete({ where: { id } });
  }
}
