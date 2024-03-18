import { Injectable } from '@nestjs/common';
import {
  CreateChatChannelInput,
  FindChatChannelInput,
  UpdateChatChannelInput,
} from 'src/graphql';
import { purify } from 'src/helpers/dom-purify';
import { PrismaService } from 'src/prisma.service';

const ROWS = 10;
@Injectable()
export class ChatChannelService {
  constructor(private prisma: PrismaService) {}
  create(createChatChannelInput: CreateChatChannelInput) {
    const { channelId, senderId, content, ...chatChannel } =
      createChatChannelInput;
    return this.prisma.chatChannel.create({
      data: {
        ...chatChannel,
        content: purify.sanitize(content),
        channel: { connect: { id: channelId } },
        sender: { connect: { id: senderId } },
      },
    });
  }

  findAll(findChatChannelInput?: FindChatChannelInput) {
    const { page = 0, ...where } = findChatChannelInput;

    return this.prisma.chatChannel.findMany({
      where: { ...where },
      include: { sender: true },
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
    return this.prisma.chatChannel.update({
      where: { id },
      data: { ...updateChatChannelInput },
    });
  }

  remove(id: number) {
    return this.prisma.chatChannel.delete({ where: { id } });
  }
}
