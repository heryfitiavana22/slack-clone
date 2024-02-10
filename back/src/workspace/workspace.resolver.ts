import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { WorkspaceService } from './workspace.service';
import {
  AmIInWorkspaceInput,
  CreateWorkspaceInput,
  FindManyWorkspaceInput,
  UpdateWorkspaceInput,
} from 'src/graphql';
import { CreateWorkspaceDto } from './dto/create-workspace-dto';
import { CurrentUser } from 'src/auth/auth.decorator';
import { UserPayload } from 'src/auth/auth.type';
import { ForbiddenException } from '@nestjs/common';

@Resolver('Workspace')
export class WorkspaceResolver {
  constructor(private readonly workspaceService: WorkspaceService) {}

  @Mutation('createWorkspace')
  create(@Args('createWorkspaceInput') createWorkspaceDto: CreateWorkspaceDto) {
    console.log(createWorkspaceDto);

    return this.workspaceService.create(createWorkspaceDto);
  }

  @Query('workspaces')
  findAll(@Args('findManyWorkspaceInput') query: FindManyWorkspaceInput) {
    return this.workspaceService.findAll(query);
  }

  @Query('workspace')
  findOne(@Args('id') id: number) {
    return this.workspaceService.findById(id);
  }

  @Query('amIInWorkspace')
  async amIInWorkspace(
    @Args('amIInWorkspaceInput') amIInWorkspaceInput: AmIInWorkspaceInput,
    @CurrentUser() user: UserPayload,
  ) {
    const find = await this.workspaceService.findOne({
      id: amIInWorkspaceInput.workspaceId,
      userId: user.id,
    });
    if (!find) throw new ForbiddenException();
    return find;
  }

  @Query('myWorkspaces')
  async myWorkspaces(@CurrentUser() user: UserPayload) {
    return this.workspaceService.findAll({ userId: user.id });
  }

  @Mutation('updateWorkspace')
  update(
    @Args('updateWorkspaceInput') updateWorkspaceInput: UpdateWorkspaceInput,
  ) {
    return this.workspaceService.update(
      updateWorkspaceInput.id,
      updateWorkspaceInput,
    );
  }

  @Mutation('removeWorkspace')
  remove(@Args('id') id: number) {
    return this.workspaceService.remove(id);
  }
}
