import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { sayHello } from '../functions/say-hello/resource';

const schema = a.schema({
  sayHello: a
    .query()
    .arguments({
      name: a.string()
    })
    .returns(a.string())
    .handler(a.handler.function(sayHello))
    .authorization(allow => [
      allow.guest(),
      allow.authenticated(),
    ]),
  Session: a
    .model({
      title: a.string(),
      description: a.string(),
      additionalInfo: a.string(),
      accessibilityRequest: a.boolean(),
      assistanceToAttend: a.boolean(),
      underrepresented: a.boolean(),
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
