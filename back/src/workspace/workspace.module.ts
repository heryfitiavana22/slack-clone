import { Module } from '@nestjs/common';
import { WorkspaceService } from './workspace.service';
import { WorkspaceResolver } from './workspace.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [WorkspaceResolver, WorkspaceService, PrismaService],
})
export class WorkspaceModule {}
