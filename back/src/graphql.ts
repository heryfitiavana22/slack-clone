/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateChannelInput {
  exampleField?: Nullable<number>;
}

export class UpdateChannelInput {
  id: number;
}

export class CreateUserInput {
  name: string;
  email: string;
}

export class UpdateUserInput {
  id: number;
  name?: Nullable<string>;
  email?: Nullable<string>;
}

export class FindManyUserInput {
  name?: Nullable<string>;
  email?: Nullable<string>;
}

export class CreateWorkspaceInput {
  name: string;
}

export class UpdateWorkspaceInput {
  id: number;
  name?: Nullable<string>;
}

export class FindManyWorkspaceInput {
  name?: Nullable<string>;
}

export class Channel {
  exampleField?: Nullable<number>;
}

export abstract class IQuery {
  abstract channels(): Nullable<Channel>[] | Promise<Nullable<Channel>[]>;

  abstract channel(id: number): Nullable<Channel> | Promise<Nullable<Channel>>;

  abstract users(
    findManyUserInput?: Nullable<FindManyUserInput>,
  ): Nullable<User>[] | Promise<Nullable<User>[]>;

  abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;

  abstract workspaces(
    findManyWorkspaceInput?: Nullable<FindManyWorkspaceInput>,
  ): Nullable<Workspace>[] | Promise<Nullable<Workspace>[]>;

  abstract workspace(
    id: number,
  ): Nullable<Workspace> | Promise<Nullable<Workspace>>;
}

export abstract class IMutation {
  abstract createChannel(
    createChannelInput: CreateChannelInput,
  ): Channel | Promise<Channel>;

  abstract updateChannel(
    updateChannelInput: UpdateChannelInput,
  ): Channel | Promise<Channel>;

  abstract removeChannel(
    id: number,
  ): Nullable<Channel> | Promise<Nullable<Channel>>;

  abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

  abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

  abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;

  abstract createWorkspace(
    createWorkspaceInput: CreateWorkspaceInput,
  ): Workspace | Promise<Workspace>;

  abstract updateWorkspace(
    updateWorkspaceInput: UpdateWorkspaceInput,
  ): Workspace | Promise<Workspace>;

  abstract removeWorkspace(
    id: number,
  ): Nullable<Workspace> | Promise<Nullable<Workspace>>;
}

export class User {
  id: number;
  name: string;
  email: string;
}

export class Workspace {
  id: number;
  name: string;
  users?: Nullable<Nullable<User>[]>;
  createdAt: string;
  updatedAt: string;
}

type Nullable<T> = T | null;
