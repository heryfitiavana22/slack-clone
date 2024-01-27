import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { WorkspaceService } from './workspace.service';
import {
  CreateWorkspaceInput,
  FindManyWorkspaceInput,
  UpdateWorkspaceInput,
} from 'src/graphql';

@Resolver('Workspace')
export class WorkspaceResolver {
  constructor(private readonly workspaceService: WorkspaceService) {}

  @Mutation('createWorkspace')
  create(
    @Args('createWorkspaceInput') createWorkspaceInput: CreateWorkspaceInput,
  ) {
    return this.workspaceService.create(createWorkspaceInput);
  }

  @Query('workspaces')
  findAll(@Args('findManyWorkspaceInput') query: FindManyWorkspaceInput) {
    return this.workspaceService.findAll(query);
  }

  @Query('workspace')
  findOne(@Args('id') id: number) {
    return this.workspaceService.findOne(id);
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
