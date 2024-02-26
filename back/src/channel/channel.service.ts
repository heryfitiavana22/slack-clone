import { Injectable } from '@nestjs/common';
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
    const { ...channel } = input ?? {};
    return this.prisma.channel.findMany({ where: { ...channel } });
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
