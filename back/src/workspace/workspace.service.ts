import { Injectable } from '@nestjs/common';
import {
  CreateWorkspaceInput,
  FindManyWorkspaceInput,
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
      },
    });
  }

  findAll(where?: FindManyWorkspaceInput) {
    return this.prisma.workspace.findMany({ where });
  }

  findOne(id: number) {
    return this.prisma.workspace.findUnique({ where: { id: id } });
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
