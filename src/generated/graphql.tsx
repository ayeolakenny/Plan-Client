import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Atendee = {
  __typename?: 'Atendee';
  _count: AtendeeCount;
  email: Scalars['String'];
  event?: Maybe<Array<Event>>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type AtendeeCount = {
  __typename?: 'AtendeeCount';
  event: Scalars['Int'];
};

export type AtendeeCreateNestedOneWithoutEventInput = {
  connect?: InputMaybe<AtendeeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AtendeeCreateOrConnectWithoutEventInput>;
  create?: InputMaybe<AtendeeCreateWithoutEventInput>;
};

export type AtendeeCreateOrConnectWithoutEventInput = {
  create: AtendeeCreateWithoutEventInput;
  where: AtendeeWhereUniqueInput;
};

export type AtendeeCreateWithoutEventInput = {
  email: Scalars['String'];
  name: Scalars['String'];
};

export type AtendeeWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type CreateEventInput = {
  additionalNotes?: InputMaybe<Scalars['String']>;
  attendeeEmail: Scalars['String'];
  attendeeName: Scalars['String'];
  date: Scalars['DateTime'];
  time: Scalars['DateTime'];
};

export type Event = {
  __typename?: 'Event';
  Atendee?: Maybe<Atendee>;
  User?: Maybe<User>;
  additionalNotes?: Maybe<Scalars['String']>;
  atendeeId?: Maybe<Scalars['Int']>;
  date: Scalars['DateTime'];
  id: Scalars['ID'];
  time: Scalars['DateTime'];
  userId?: Maybe<Scalars['Int']>;
};

export type EventCreateManyUserInput = {
  additionalNotes?: InputMaybe<Scalars['String']>;
  atendeeId?: InputMaybe<Scalars['Int']>;
  date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['Int']>;
  time: Scalars['DateTime'];
};

export type EventCreateManyUserInputEnvelope = {
  data: Array<EventCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type EventCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<EventCreateWithoutUserInput>>;
  createMany?: InputMaybe<EventCreateManyUserInputEnvelope>;
};

export type EventCreateOrConnectWithoutUserInput = {
  create: EventCreateWithoutUserInput;
  where: EventWhereUniqueInput;
};

export type EventCreateWithoutUserInput = {
  Atendee?: InputMaybe<AtendeeCreateNestedOneWithoutEventInput>;
  additionalNotes?: InputMaybe<Scalars['String']>;
  date: Scalars['DateTime'];
  time: Scalars['DateTime'];
};

export type EventType = {
  __typename?: 'EventType';
  User?: Maybe<User>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  length: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId?: Maybe<Scalars['Int']>;
};

export type EventTypeCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  length: Scalars['Int'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventTypeCreateManyUserInputEnvelope = {
  data: Array<EventTypeCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type EventTypeCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<EventTypeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventTypeCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<EventTypeCreateWithoutUserInput>>;
  createMany?: InputMaybe<EventTypeCreateManyUserInputEnvelope>;
};

export type EventTypeCreateOrConnectWithoutUserInput = {
  create: EventTypeCreateWithoutUserInput;
  where: EventTypeWhereUniqueInput;
};

export type EventTypeCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  length: Scalars['Int'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventTypeWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type EventTypesCreateInput = {
  User?: InputMaybe<UserCreateNestedOneWithoutEventTypesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  length: Scalars['Int'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createEvent: Event;
  createEventType: EventType;
  login: User;
  logout: Scalars['Boolean'];
  register: User;
};


export type MutationCreateEventArgs = {
  input: CreateEventInput;
};


export type MutationCreateEventTypeArgs = {
  input: EventTypesCreateInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRegisterArgs = {
  input: UserCreateInput;
};

export type Query = {
  __typename?: 'Query';
  findUniqueEvent: Event;
  findUserById: User;
  findUserEventTypes: Array<EventType>;
  findUserEvents: Array<Event>;
  me?: Maybe<User>;
};


export type QueryFindUniqueEventArgs = {
  eventId: Scalars['Float'];
};


export type QueryFindUserByIdArgs = {
  userId: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  event?: Maybe<Array<Event>>;
  eventTypes?: Maybe<Array<EventType>>;
  id: Scalars['ID'];
  password: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserCount = {
  __typename?: 'UserCount';
  event: Scalars['Int'];
  eventTypes: Scalars['Int'];
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  event?: InputMaybe<EventCreateNestedManyWithoutUserInput>;
  eventTypes?: InputMaybe<EventTypeCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserCreateNestedOneWithoutEventTypesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutEventTypesInput>;
  create?: InputMaybe<UserCreateWithoutEventTypesInput>;
};

export type UserCreateOrConnectWithoutEventTypesInput = {
  create: UserCreateWithoutEventTypesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutEventTypesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  event?: InputMaybe<EventCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  username?: InputMaybe<Scalars['String']>;
};

export type EventTypeFragment = { __typename?: 'EventType', id: string, title: string, length: number, description: string, createdAt: any, updatedAt: any };

export type UserFragment = { __typename?: 'User', id: string, email: string, username: string, createdAt: any, updatedAt: any };

export type CreateEventTypeMutationVariables = Exact<{
  title: Scalars['String'];
  description: Scalars['String'];
  length: Scalars['Int'];
}>;


export type CreateEventTypeMutation = { __typename?: 'Mutation', createEventType: { __typename?: 'EventType', id: string, title: string, length: number, description: string, createdAt: any, updatedAt: any } };

export type CreateEventMutationVariables = Exact<{
  date: Scalars['DateTime'];
  time: Scalars['DateTime'];
  additionalNotes?: InputMaybe<Scalars['String']>;
  attendeeName: Scalars['String'];
  attendeeEmail: Scalars['String'];
}>;


export type CreateEventMutation = { __typename?: 'Mutation', createEvent: { __typename?: 'Event', id: string, date: any, time: any, additionalNotes?: string | null } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'User', id: string, email: string, username: string, createdAt: any, updatedAt: any } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'User', id: string, email: string, username: string, createdAt: any, updatedAt: any } };

export type FindUniqueEventQueryVariables = Exact<{
  eventId: Scalars['Float'];
}>;


export type FindUniqueEventQuery = { __typename?: 'Query', findUniqueEvent: { __typename?: 'Event', id: string, date: any, time: any, additionalNotes?: string | null, Atendee?: { __typename?: 'Atendee', id: string, name: string, email: string } | null } };

export type FindUserEventTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindUserEventTypesQuery = { __typename?: 'Query', findUserEventTypes: Array<{ __typename?: 'EventType', id: string, title: string, length: number, description: string, createdAt: any, updatedAt: any }> };

export type FindUserEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindUserEventsQuery = { __typename?: 'Query', findUserEvents: Array<{ __typename?: 'Event', id: string, date: any, time: any, additionalNotes?: string | null, Atendee?: { __typename?: 'Atendee', id: string, name: string, email: string } | null }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, email: string, username: string, createdAt: any, updatedAt: any } | null };

export const EventTypeFragmentDoc = gql`
    fragment EventType on EventType {
  id
  title
  length
  description
  createdAt
  updatedAt
}
    `;
export const UserFragmentDoc = gql`
    fragment User on User {
  id
  email
  username
  createdAt
  updatedAt
}
    `;
export const CreateEventTypeDocument = gql`
    mutation CreateEventType($title: String!, $description: String!, $length: Int!) {
  createEventType(
    input: {title: $title, description: $description, length: $length}
  ) {
    ...EventType
  }
}
    ${EventTypeFragmentDoc}`;
export type CreateEventTypeMutationFn = Apollo.MutationFunction<CreateEventTypeMutation, CreateEventTypeMutationVariables>;

/**
 * __useCreateEventTypeMutation__
 *
 * To run a mutation, you first call `useCreateEventTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventTypeMutation, { data, loading, error }] = useCreateEventTypeMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      length: // value for 'length'
 *   },
 * });
 */
export function useCreateEventTypeMutation(baseOptions?: Apollo.MutationHookOptions<CreateEventTypeMutation, CreateEventTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEventTypeMutation, CreateEventTypeMutationVariables>(CreateEventTypeDocument, options);
      }
export type CreateEventTypeMutationHookResult = ReturnType<typeof useCreateEventTypeMutation>;
export type CreateEventTypeMutationResult = Apollo.MutationResult<CreateEventTypeMutation>;
export type CreateEventTypeMutationOptions = Apollo.BaseMutationOptions<CreateEventTypeMutation, CreateEventTypeMutationVariables>;
export const CreateEventDocument = gql`
    mutation createEvent($date: DateTime!, $time: DateTime!, $additionalNotes: String, $attendeeName: String!, $attendeeEmail: String!) {
  createEvent(
    input: {date: $date, time: $time, additionalNotes: $additionalNotes, attendeeName: $attendeeName, attendeeEmail: $attendeeEmail}
  ) {
    id
    date
    time
    additionalNotes
  }
}
    `;
export type CreateEventMutationFn = Apollo.MutationFunction<CreateEventMutation, CreateEventMutationVariables>;

/**
 * __useCreateEventMutation__
 *
 * To run a mutation, you first call `useCreateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventMutation, { data, loading, error }] = useCreateEventMutation({
 *   variables: {
 *      date: // value for 'date'
 *      time: // value for 'time'
 *      additionalNotes: // value for 'additionalNotes'
 *      attendeeName: // value for 'attendeeName'
 *      attendeeEmail: // value for 'attendeeEmail'
 *   },
 * });
 */
export function useCreateEventMutation(baseOptions?: Apollo.MutationHookOptions<CreateEventMutation, CreateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEventMutation, CreateEventMutationVariables>(CreateEventDocument, options);
      }
export type CreateEventMutationHookResult = ReturnType<typeof useCreateEventMutation>;
export type CreateEventMutationResult = Apollo.MutationResult<CreateEventMutation>;
export type CreateEventMutationOptions = Apollo.BaseMutationOptions<CreateEventMutation, CreateEventMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(input: {password: $password, email: $email}) {
    ...User
  }
}
    ${UserFragmentDoc}`;
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
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $username: String!, $password: String!) {
  register(input: {email: $email, username: $username, password: $password}) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const FindUniqueEventDocument = gql`
    query FindUniqueEvent($eventId: Float!) {
  findUniqueEvent(eventId: $eventId) {
    id
    date
    time
    additionalNotes
    Atendee {
      id
      name
      email
    }
  }
}
    `;

/**
 * __useFindUniqueEventQuery__
 *
 * To run a query within a React component, call `useFindUniqueEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUniqueEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUniqueEventQuery({
 *   variables: {
 *      eventId: // value for 'eventId'
 *   },
 * });
 */
export function useFindUniqueEventQuery(baseOptions: Apollo.QueryHookOptions<FindUniqueEventQuery, FindUniqueEventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUniqueEventQuery, FindUniqueEventQueryVariables>(FindUniqueEventDocument, options);
      }
export function useFindUniqueEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUniqueEventQuery, FindUniqueEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUniqueEventQuery, FindUniqueEventQueryVariables>(FindUniqueEventDocument, options);
        }
export type FindUniqueEventQueryHookResult = ReturnType<typeof useFindUniqueEventQuery>;
export type FindUniqueEventLazyQueryHookResult = ReturnType<typeof useFindUniqueEventLazyQuery>;
export type FindUniqueEventQueryResult = Apollo.QueryResult<FindUniqueEventQuery, FindUniqueEventQueryVariables>;
export const FindUserEventTypesDocument = gql`
    query FindUserEventTypes {
  findUserEventTypes {
    ...EventType
  }
}
    ${EventTypeFragmentDoc}`;

/**
 * __useFindUserEventTypesQuery__
 *
 * To run a query within a React component, call `useFindUserEventTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserEventTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserEventTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindUserEventTypesQuery(baseOptions?: Apollo.QueryHookOptions<FindUserEventTypesQuery, FindUserEventTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUserEventTypesQuery, FindUserEventTypesQueryVariables>(FindUserEventTypesDocument, options);
      }
export function useFindUserEventTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserEventTypesQuery, FindUserEventTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUserEventTypesQuery, FindUserEventTypesQueryVariables>(FindUserEventTypesDocument, options);
        }
export type FindUserEventTypesQueryHookResult = ReturnType<typeof useFindUserEventTypesQuery>;
export type FindUserEventTypesLazyQueryHookResult = ReturnType<typeof useFindUserEventTypesLazyQuery>;
export type FindUserEventTypesQueryResult = Apollo.QueryResult<FindUserEventTypesQuery, FindUserEventTypesQueryVariables>;
export const FindUserEventsDocument = gql`
    query FindUserEvents {
  findUserEvents {
    id
    date
    time
    additionalNotes
    Atendee {
      id
      name
      email
    }
  }
}
    `;

/**
 * __useFindUserEventsQuery__
 *
 * To run a query within a React component, call `useFindUserEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindUserEventsQuery(baseOptions?: Apollo.QueryHookOptions<FindUserEventsQuery, FindUserEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUserEventsQuery, FindUserEventsQueryVariables>(FindUserEventsDocument, options);
      }
export function useFindUserEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserEventsQuery, FindUserEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUserEventsQuery, FindUserEventsQueryVariables>(FindUserEventsDocument, options);
        }
export type FindUserEventsQueryHookResult = ReturnType<typeof useFindUserEventsQuery>;
export type FindUserEventsLazyQueryHookResult = ReturnType<typeof useFindUserEventsLazyQuery>;
export type FindUserEventsQueryResult = Apollo.QueryResult<FindUserEventsQuery, FindUserEventsQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...User
  }
}
    ${UserFragmentDoc}`;

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
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;