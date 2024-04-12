import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  CreateChannelInput,
  FindChannelInput,
  FindManyChannelInput,
  UpdateChannelInput,
} from 'src/graphql';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ChannelService {
  constructor(private prisma: PrismaService) {}

  create(createChannelInput: CreateChannelInput) {
    const { workspaceId, ...channel } = createChannelInput;
    return this.prisma.channel.create({
      data: { ...channel, workspace: { connect: { id: workspaceId } } },
    });
  }

   findAll(input?: FindManyChannelInput) {
    const { userId, hasUnRead, ...channel } = input ?? {};
    return this.prisma.channel.findMany({ where: { ...channel } });
  }

  async findAllWithHasUnRead(input?: FindManyChannelInput) {
    const { userId, hasUnRead, ...channel } = input ?? {};
    if (!userId)
      throw new HttpException('Must have userId', HttpStatus.BAD_REQUEST);
    const channels = await this.prisma.channel.findMany({
      where: { ...channel },
      include: {
        ChatChannel: {
          where: {
            NOT: {
              seenByUsers: { some: { id: userId } },
            },
          },
        },
      },
    });
    return channels.map(ch => ({...ch, hasUnRead: ch.ChatChannel.length > 0}))
  }

  findById(id: number) {
    return this.prisma.channel.findUnique({ where: { id } });
  }

  findOne(findChannelInput: FindChannelInput) {
    return this.prisma.channel.findFirstOrThrow({
      where: { ...findChannelInput },
    });
  }

  update(id: number, updateChannelInput: UpdateChannelInput) {
    return this.prisma.channel.update({
      where: { id },
      data: { ...updateChannelInput },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
