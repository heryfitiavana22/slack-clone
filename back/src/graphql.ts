
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class LoginInput {
    email: string;
    password: string;
}

export class CreateChannelInput {
    exampleField?: Nullable<number>;
}

export class UpdateChannelInput {
    id: number;
}

export class CreateUserInput {
    name: string;
    email: string;
    password: string;
}

export class UpdateUserInput {
    id: number;
    name?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export class FindManyUserInput {
    name?: Nullable<string>;
    email?: Nullable<string>;
}

export class CreateWorkspaceInput {
    name: string;
    usersEmails: Nullable<string>[];
}

export class UpdateWorkspaceInput {
    id: number;
    name?: Nullable<string>;
}

export class FindManyWorkspaceInput {
    name?: Nullable<string>;
}

export class FindWorkspaceInput {
    id?: Nullable<number>;
    name?: Nullable<string>;
    userId?: Nullable<number>;
}

export class AmIInWorkspaceInput {
    workspaceId: number;
}

export class Token {
    access_token: string;
}

export abstract class IQuery {
    abstract me(): Nullable<User> | Promise<Nullable<User>>;

    abstract channels(): Nullable<Channel>[] | Promise<Nullable<Channel>[]>;

    abstract channel(id: number): Nullable<Channel> | Promise<Nullable<Channel>>;

    abstract users(findManyUserInput?: Nullable<FindManyUserInput>): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;

    abstract workspaces(findManyWorkspaceInput?: Nullable<FindManyWorkspaceInput>): Nullable<Workspace>[] | Promise<Nullable<Workspace>[]>;

    abstract workspace(id: number): Nullable<Workspace> | Promise<Nullable<Workspace>>;

    abstract amIInWorkspace(amIInWorkspaceInput?: Nullable<AmIInWorkspaceInput>): Nullable<Workspace> | Promise<Nullable<Workspace>>;
}

export abstract class IMutation {
    abstract login(loginInput: LoginInput): Token | Promise<Token>;

    abstract createChannel(createChannelInput: CreateChannelInput): Channel | Promise<Channel>;

    abstract updateChannel(updateChannelInput: UpdateChannelInput): Channel | Promise<Channel>;

    abstract removeChannel(id: number): Nullable<Channel> | Promise<Nullable<Channel>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;

    abstract createWorkspace(createWorkspaceInput: CreateWorkspaceInput): Workspace | Promise<Workspace>;

    abstract updateWorkspace(updateWorkspaceInput: UpdateWorkspaceInput): Workspace | Promise<Workspace>;

    abstract removeWorkspace(id: number): Nullable<Workspace> | Promise<Nullable<Workspace>>;
}

export class Channel {
    exampleField?: Nullable<number>;
}

export class User {
    id: number;
    name: string;
    email: string;
}

export class Workspace {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
}

export class IsInWorkspace {
    is: boolean;
}

type Nullable<T> = T | null;
