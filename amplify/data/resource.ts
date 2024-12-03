import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Session: a
    .model({
      title: a.string().required(),
      description: a.string().required(),
      additionalInfo: a.string(),
      accessibilityRequest: a.boolean().required(),
      assistanceToAttend: a.boolean().required(),
      underrepresented: a.boolean().required(),
      level: a.enum(['BEGINNER', 'INTERMEDIATE', 'ADVANCED']),
      status: a.enum(['IN_REVIEW', 'ACCEPTED', 'DECLINED']),
    })
    .authorization(allow => [
      allow.owner(),
    ])
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam',
  },
});
