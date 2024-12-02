/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession(
    $filter: ModelSubscriptionSessionFilterInput
    $owner: String
  ) {
    onCreateSession(filter: $filter, owner: $owner) {
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
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession(
    $filter: ModelSubscriptionSessionFilterInput
    $owner: String
  ) {
    onDeleteSession(filter: $filter, owner: $owner) {
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
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession(
    $filter: ModelSubscriptionSessionFilterInput
    $owner: String
  ) {
    onUpdateSession(filter: $filter, owner: $owner) {
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
