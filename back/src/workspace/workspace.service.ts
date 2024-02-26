import { Injectable } from '@nestjs/common';
import { DEFAULT_CHANNEL } from 'src/channel/channel.helper';
import {
  CreateWorkspaceInput,
  FindManyWorkspaceInput,
  FindWorkspaceInput,
  UpdateWorkspaceInput,
} from 'src/graphql';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class WorkspaceService {
  constructor(private prisma: PrismaService) {}

  create(createWorkspaceInput: CreateWorkspaceInput) {
    const { usersEmails, ...workspace } = createWorkspaceInput;
    return this.prisma.workspace.create({
      data: {
        ...workspace,
        users: { connect: usersEmails.map((email) => ({ email })) },
        channels: {
          create: {
            name: DEFAULT_CHANNEL,
          },
        },
      },
    });
  }

  findAll(input?: FindManyWorkspaceInput) {
    const { userId, ...workspace } = input;
    return this.prisma.workspace.findMany({
      where: { ...workspace, users: { some: { id: userId } } },
      // include: { _count: { select: { users: true } } },
    });
  }

  findById(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  findOne(findWorkspaceInput: FindWorkspaceInput) {
    const { userId, ...where } = findWorkspaceInput;
    return this.prisma.workspace.findFirst({
      where: {
        ...where,
        users: { some: { id: userId } },
      },
    });
  }

  update(id: number, updateWorkspaceInput: UpdateWorkspaceInput) {
    return this.prisma.workspace.update({
      where: { id },
      data: { ...updateWorkspaceInput },
    });
  }

  remove(id: number) {
    return this.prisma.workspace.delete({ where: { id } });
  }
}
