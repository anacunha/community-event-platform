import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },

  userAttributes: {
    familyName: {
      mutable: true,
      required: true,
    },

    givenName: {
      mutable: true,
      required: true,
    },

    profilePicture: {
      mutable: true,
      required: false,
    },

    website: {
      mutable: true,
      required: false,
    },

    "custom:biography": {
      dataType: "String",
      mutable: true,
      minLen: 0,
      maxLen: 500,
    }
  },

  groups: ["admin", "speaker"],
});
