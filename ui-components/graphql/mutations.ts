/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSession = /* GraphQL */ `
  mutation CreateSession(
    $condition: ModelSessionConditionInput
    $input: CreateSessionInput!
  ) {
    createSession(condition: $condition, input: $input) {
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
export const deleteSession = /* GraphQL */ `
  mutation DeleteSession(
    $condition: ModelSessionConditionInput
    $input: DeleteSessionInput!
  ) {
    deleteSession(condition: $condition, input: $input) {
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
export const updateSession = /* GraphQL */ `
  mutation UpdateSession(
    $condition: ModelSessionConditionInput
    $input: UpdateSessionInput!
  ) {
    updateSession(condition: $condition, input: $input) {
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
