/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSession = /* GraphQL */ `
  query GetSession($id: ID!) {
    getSession(id: $id) {
      accessibilityRequest
      additionalInfo
      assistanceToAttend
      createdAt
      description
      id
      level
      owner
      status
      title
      underrepresented
      updatedAt
      __typename
    }
  }
`;
export const listSessions = /* GraphQL */ `
  query ListSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        accessibilityRequest
        additionalInfo
        assistanceToAttend
        createdAt
        description
        id
        level
        owner
        status
        title
        underrepresented
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const sayHello = /* GraphQL */ `
  query SayHello($name: String) {
    sayHello(name: $name)
  }
`;
