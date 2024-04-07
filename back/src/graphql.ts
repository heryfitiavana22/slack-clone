
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

export class FindManyChannelInput {
    workspaceId?: Nullable<number>;
}

export class FindChannelInput {
    id?: Nullable<number>;
    name?: Nullable<string>;
    workspaceId?: Nullable<number>;
}

export class CreateChannelInput {
    name: string;
    workspaceId: number;
}

export class UpdateChannelInput {
    id: number;
    name?: Nullable<string>;
}

export class FindChatChannelInput {
    channelId: number;
    page?: Nullable<number>;
}

export class FindChatChannelGroupedInput {
    channelId: number;
    page?: Nullable<number>;
    userId: number;
}

export class CreateChatChannelInput {
    content: string;
    senderId: number;
    channelId: number;
    seenByUsersIds?: Nullable<Nullable<number>[]>;
}

export class UpdateChatChannelInput {
    id: number;
    usersIds?: Nullable<Nullable<number>[]>;
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
    userId?: Nullable<number>;
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

    abstract channels(findManyChannelInput?: Nullable<FindManyChannelInput>): Nullable<Channel>[] | Promise<Nullable<Channel>[]>;

    abstract channel(id: number): Nullable<Channel> | Promise<Nullable<Channel>>;

    abstract channelQuery(findChannelInput?: Nullable<FindChannelInput>): Nullable<Channel> | Promise<Nullable<Channel>>;

    abstract chatChannels(findChatChannelInput?: Nullable<FindChatChannelInput>): Nullable<ChatChannel>[] | Promise<Nullable<ChatChannel>[]>;

    abstract chatChannelsGrouped(findChatChannelGroupedInput?: Nullable<FindChatChannelGroupedInput>): ChatChannelGrouped | Promise<ChatChannelGrouped>;

    abstract chatChannel(id: number): Nullable<ChatChannel> | Promise<Nullable<ChatChannel>>;

    abstract users(findManyUserInput?: Nullable<FindManyUserInput>): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;

    abstract workspaces(findManyWorkspaceInput?: Nullable<FindManyWorkspaceInput>): Nullable<Workspace>[] | Promise<Nullable<Workspace>[]>;

    abstract workspace(id: number): Nullable<Workspace> | Promise<Nullable<Workspace>>;

    abstract amIInWorkspace(amIInWorkspaceInput?: Nullable<AmIInWorkspaceInput>): Nullable<Workspace> | Promise<Nullable<Workspace>>;

    abstract myWorkspaces(): Nullable<Workspace>[] | Promise<Nullable<Workspace>[]>;
}

export abstract class IMutation {
    abstract login(loginInput: LoginInput): Token | Promise<Token>;

    abstract createChannel(createChannelInput: CreateChannelInput): Channel | Promise<Channel>;

    abstract updateChannel(updateChannelInput: UpdateChannelInput): Channel | Promise<Channel>;

    abstract removeChannel(id: number): Nullable<Channel> | Promise<Nullable<Channel>>;

    abstract createChatChannel(createChatChannelInput: CreateChatChannelInput): ChatChannel | Promise<ChatChannel>;

    abstract updateChatChannel(updateChatChannelInput: UpdateChatChannelInput): ChatChannel | Promise<ChatChannel>;

    abstract removeChatChannel(id: number): Nullable<ChatChannel> | Promise<Nullable<ChatChannel>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;

    abstract createWorkspace(createWorkspaceInput: CreateWorkspaceInput): Workspace | Promise<Workspace>;

    abstract updateWorkspace(updateWorkspaceInput: UpdateWorkspaceInput): Workspace | Promise<Workspace>;

    abstract removeWorkspace(id: number): Nullable<Workspace> | Promise<Nullable<Workspace>>;
}

export class Channel {
    id: number;
    name: string;
}

export class ChatChannel {
    id: number;
    content: string;
    sender: User;
    senderId: number;
    channelId?: Nullable<number>;
    createdAt: string;
    updatedAt: string;
    seenByUsers?: Nullable<Nullable<User>[]>;
}

export class ChatChannelGrouped {
    seen: Nullable<ChatChannel>[];
    notSeen: Nullable<ChatChannel>[];
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
