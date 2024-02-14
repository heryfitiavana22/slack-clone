import { Injectable } from '@nestjs/common';
import {
  CreateChannelInput,
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
    const { ...channel } = input ?? {};
    return this.prisma.channel.findMany({ where: { ...channel } });
  }

  findOne(id: number) {
    return this.prisma.channel.findUnique({ where: { id } });
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
