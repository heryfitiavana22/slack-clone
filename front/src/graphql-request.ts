import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AmIInWorkspaceInput = {
  workspaceId: Scalars['Int']['input'];
};

export type Channel = {
  __typename?: 'Channel';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type CreateChannelInput = {
  name: Scalars['String']['input'];
  workspaceId: Scalars['Int']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateWorkspaceInput = {
  name: Scalars['String']['input'];
  usersEmails: Array<InputMaybe<Scalars['String']['input']>>;
};

export type FindManyChannelInput = {
  workspaceId?: InputMaybe<Scalars['Int']['input']>;
};

export type FindManyUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FindManyWorkspaceInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type FindWorkspaceInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type IsInWorkspace = {
  __typename?: 'IsInWorkspace';
  is: Scalars['Boolean']['output'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createChannel: Channel;
  createUser: User;
  createWorkspace: Workspace;
  login: Token;
  removeChannel?: Maybe<Channel>;
  removeUser?: Maybe<User>;
  removeWorkspace?: Maybe<Workspace>;
  updateChannel: Channel;
  updateUser: User;
  updateWorkspace: Workspace;
};


export type MutationCreateChannelArgs = {
  createChannelInput: CreateChannelInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateWorkspaceArgs = {
  createWorkspaceInput: CreateWorkspaceInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRemoveChannelArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveWorkspaceArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateChannelArgs = {
  updateChannelInput: UpdateChannelInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUpdateWorkspaceArgs = {
  updateWorkspaceInput: UpdateWorkspaceInput;
};

export type Query = {
  __typename?: 'Query';
  amIInWorkspace?: Maybe<Workspace>;
  channel?: Maybe<Channel>;
  channels: Array<Maybe<Channel>>;
  me?: Maybe<User>;
  myWorkspaces: Array<Maybe<Workspace>>;
  user?: Maybe<User>;
  users: Array<Maybe<User>>;
  workspace?: Maybe<Workspace>;
  workspaces: Array<Maybe<Workspace>>;
};


export type QueryAmIInWorkspaceArgs = {
  amIInWorkspaceInput?: InputMaybe<AmIInWorkspaceInput>;
};


export type QueryChannelArgs = {
  id: Scalars['Int']['input'];
};


export type QueryChannelsArgs = {
  findManyChannelInput?: InputMaybe<FindManyChannelInput>;
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUsersArgs = {
  findManyUserInput?: InputMaybe<FindManyUserInput>;
};


export type QueryWorkspaceArgs = {
  id: Scalars['Int']['input'];
};


export type QueryWorkspacesArgs = {
  findManyWorkspaceInput?: InputMaybe<FindManyWorkspaceInput>;
};

export type Token = {
  __typename?: 'Token';
  access_token: Scalars['String']['output'];
};

export type UpdateChannelInput = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWorkspaceInput = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Workspace = {
  __typename?: 'Workspace';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, name: string, email: string } | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Token', access_token: string } };

export type CreateUserMutationVariables = Exact<{
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: number, name: string, email: string } };

export type CreatWorkspaceMutationVariables = Exact<{
  name: Scalars['String']['input'];
  usersEmails: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
}>;


export type CreatWorkspaceMutation = { __typename?: 'Mutation', createWorkspace: { __typename?: 'Workspace', id: number, name: string } };

export type AmIInWorkspaceQueryVariables = Exact<{
  workspaceId: Scalars['Int']['input'];
}>;


export type AmIInWorkspaceQuery = { __typename?: 'Query', amIInWorkspace?: { __typename?: 'Workspace', id: number, name: string, createdAt: string, updatedAt: string } | null };

export type MyWorkspacesQueryVariables = Exact<{ [key: string]: never; }>;


export type MyWorkspacesQuery = { __typename?: 'Query', myWorkspaces: Array<{ __typename?: 'Workspace', id: number, name: string, createdAt: string, updatedAt: string } | null> };

export type ChannelsQueryVariables = Exact<{
  workspaceId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ChannelsQuery = { __typename?: 'Query', channels: Array<{ __typename?: 'Channel', id: number, name: string } | null> };

export type CreateChannelMutationVariables = Exact<{
  name: Scalars['String']['input'];
  workspaceId: Scalars['Int']['input'];
}>;


export type CreateChannelMutation = { __typename?: 'Mutation', createChannel: { __typename?: 'Channel', id: number, name: string } };


export const MeDocument = gql`
    query Me {
  me {
    id
    name
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export function useMeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(loginInput: {email: $email, password: $password}) {
    access_token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($name: String!, $email: String!, $password: String!) {
  createUser(createUserInput: {email: $email, name: $name, password: $password}) {
    id
    name
    email
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const CreatWorkspaceDocument = gql`
    mutation CreatWorkspace($name: String!, $usersEmails: [String]!) {
  createWorkspace(createWorkspaceInput: {name: $name, usersEmails: $usersEmails}) {
    id
    name
  }
}
    `;
export type CreatWorkspaceMutationFn = Apollo.MutationFunction<CreatWorkspaceMutation, CreatWorkspaceMutationVariables>;

/**
 * __useCreatWorkspaceMutation__
 *
 * To run a mutation, you first call `useCreatWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [creatWorkspaceMutation, { data, loading, error }] = useCreatWorkspaceMutation({
 *   variables: {
 *      name: // value for 'name'
 *      usersEmails: // value for 'usersEmails'
 *   },
 * });
 */
export function useCreatWorkspaceMutation(baseOptions?: Apollo.MutationHookOptions<CreatWorkspaceMutation, CreatWorkspaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatWorkspaceMutation, CreatWorkspaceMutationVariables>(CreatWorkspaceDocument, options);
      }
export type CreatWorkspaceMutationHookResult = ReturnType<typeof useCreatWorkspaceMutation>;
export type CreatWorkspaceMutationResult = Apollo.MutationResult<CreatWorkspaceMutation>;
export type CreatWorkspaceMutationOptions = Apollo.BaseMutationOptions<CreatWorkspaceMutation, CreatWorkspaceMutationVariables>;
export const AmIInWorkspaceDocument = gql`
    query AmIInWorkspace($workspaceId: Int!) {
  amIInWorkspace(amIInWorkspaceInput: {workspaceId: $workspaceId}) {
    id
    name
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useAmIInWorkspaceQuery__
 *
 * To run a query within a React component, call `useAmIInWorkspaceQuery` and pass it any options that fit your needs.
 * When your component renders, `useAmIInWorkspaceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAmIInWorkspaceQuery({
 *   variables: {
 *      workspaceId: // value for 'workspaceId'
 *   },
 * });
 */
export function useAmIInWorkspaceQuery(baseOptions: Apollo.QueryHookOptions<AmIInWorkspaceQuery, AmIInWorkspaceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AmIInWorkspaceQuery, AmIInWorkspaceQueryVariables>(AmIInWorkspaceDocument, options);
      }
export function useAmIInWorkspaceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AmIInWorkspaceQuery, AmIInWorkspaceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AmIInWorkspaceQuery, AmIInWorkspaceQueryVariables>(AmIInWorkspaceDocument, options);
        }
export function useAmIInWorkspaceSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AmIInWorkspaceQuery, AmIInWorkspaceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AmIInWorkspaceQuery, AmIInWorkspaceQueryVariables>(AmIInWorkspaceDocument, options);
        }
export type AmIInWorkspaceQueryHookResult = ReturnType<typeof useAmIInWorkspaceQuery>;
export type AmIInWorkspaceLazyQueryHookResult = ReturnType<typeof useAmIInWorkspaceLazyQuery>;
export type AmIInWorkspaceSuspenseQueryHookResult = ReturnType<typeof useAmIInWorkspaceSuspenseQuery>;
export type AmIInWorkspaceQueryResult = Apollo.QueryResult<AmIInWorkspaceQuery, AmIInWorkspaceQueryVariables>;
export const MyWorkspacesDocument = gql`
    query MyWorkspaces {
  myWorkspaces {
    id
    name
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useMyWorkspacesQuery__
 *
 * To run a query within a React component, call `useMyWorkspacesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyWorkspacesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyWorkspacesQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyWorkspacesQuery(baseOptions?: Apollo.QueryHookOptions<MyWorkspacesQuery, MyWorkspacesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyWorkspacesQuery, MyWorkspacesQueryVariables>(MyWorkspacesDocument, options);
      }
export function useMyWorkspacesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyWorkspacesQuery, MyWorkspacesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyWorkspacesQuery, MyWorkspacesQueryVariables>(MyWorkspacesDocument, options);
        }
export function useMyWorkspacesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MyWorkspacesQuery, MyWorkspacesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MyWorkspacesQuery, MyWorkspacesQueryVariables>(MyWorkspacesDocument, options);
        }
export type MyWorkspacesQueryHookResult = ReturnType<typeof useMyWorkspacesQuery>;
export type MyWorkspacesLazyQueryHookResult = ReturnType<typeof useMyWorkspacesLazyQuery>;
export type MyWorkspacesSuspenseQueryHookResult = ReturnType<typeof useMyWorkspacesSuspenseQuery>;
export type MyWorkspacesQueryResult = Apollo.QueryResult<MyWorkspacesQuery, MyWorkspacesQueryVariables>;
export const ChannelsDocument = gql`
    query Channels($workspaceId: Int) {
  channels(findManyChannelInput: {workspaceId: $workspaceId}) {
    id
    name
  }
}
    `;

/**
 * __useChannelsQuery__
 *
 * To run a query within a React component, call `useChannelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useChannelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChannelsQuery({
 *   variables: {
 *      workspaceId: // value for 'workspaceId'
 *   },
 * });
 */
export function useChannelsQuery(baseOptions?: Apollo.QueryHookOptions<ChannelsQuery, ChannelsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChannelsQuery, ChannelsQueryVariables>(ChannelsDocument, options);
      }
export function useChannelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChannelsQuery, ChannelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChannelsQuery, ChannelsQueryVariables>(ChannelsDocument, options);
        }
export function useChannelsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ChannelsQuery, ChannelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ChannelsQuery, ChannelsQueryVariables>(ChannelsDocument, options);
        }
export type ChannelsQueryHookResult = ReturnType<typeof useChannelsQuery>;
export type ChannelsLazyQueryHookResult = ReturnType<typeof useChannelsLazyQuery>;
export type ChannelsSuspenseQueryHookResult = ReturnType<typeof useChannelsSuspenseQuery>;
export type ChannelsQueryResult = Apollo.QueryResult<ChannelsQuery, ChannelsQueryVariables>;
export const CreateChannelDocument = gql`
    mutation CreateChannel($name: String!, $workspaceId: Int!) {
  createChannel(createChannelInput: {name: $name, workspaceId: $workspaceId}) {
    id
    name
  }
}
    `;
export type CreateChannelMutationFn = Apollo.MutationFunction<CreateChannelMutation, CreateChannelMutationVariables>;

/**
 * __useCreateChannelMutation__
 *
 * To run a mutation, you first call `useCreateChannelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChannelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChannelMutation, { data, loading, error }] = useCreateChannelMutation({
 *   variables: {
 *      name: // value for 'name'
 *      workspaceId: // value for 'workspaceId'
 *   },
 * });
 */
export function useCreateChannelMutation(baseOptions?: Apollo.MutationHookOptions<CreateChannelMutation, CreateChannelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateChannelMutation, CreateChannelMutationVariables>(CreateChannelDocument, options);
      }
export type CreateChannelMutationHookResult = ReturnType<typeof useCreateChannelMutation>;
export type CreateChannelMutationResult = Apollo.MutationResult<CreateChannelMutation>;
export type CreateChannelMutationOptions = Apollo.BaseMutationOptions<CreateChannelMutation, CreateChannelMutationVariables>;