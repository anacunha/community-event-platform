import { generateClient } from 'aws-amplify/api';
import type { Schema } from '../../amplify/data/resource';
import { useState } from 'react';
import { Authenticator, Flex, Heading, Image, useTheme, View } from '@aws-amplify/ui-react';

const client = generateClient<Schema>({
  authMode: 'userPool',
});

function Home() {
  const [greeting, setGreeting] = useState<string | null>(null);

  async function sayHello() {
    const { data, errors } = await client.queries.sayHello({
      name: window.prompt('What is your name?'),
    });

    if (!errors) {
      setGreeting(data);
    } else {
      console.log(errors);
    }
  }

  const formFields = {
    signIn: {
      username: {
        placeholder: '',
        isRequired: true,
      },
      password: {
        placeholder: '',
        isRequired: true,
      },
    },
    signUp: {
      family_name: {
        placeholder: '',
        isRequired: true,
        label: 'First Name',
        order: 1,
      },
      given_name: {
        placeholder: '',
        isRequired: true,
        label: 'Last Name',
        order: 2,
      },
      email: {
        placeholder: '',
        isRequired: true,
        label: 'Email',
        order: 3,
      },
      password: {
        placeholder: '',
        isRequired: true,
        label: 'Password',
        order: 4,
      },
      confirm_password: {
        placeholder: '',
        isRequired: true,
        label: 'Confirm password',
        order: 5,
      },
    },
  }

  const { tokens } = useTheme();

  const components = {
    Header() {
      return (
        <>
          <Heading
            level={1}
            textAlign="center"
          >
            Welcome to AWS Community Talks!
          </Heading>
          <View textAlign="center" padding={tokens.space.large}>
            <Image
              alt="AWS Community members"
              src="/community.png"
              height="270px"
            />
          </View>
        </>
      );
    },
  }

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      backgroundColor="rgba(199,187,235,1)"
      style={{ minHeight: '100vh' }}
    >
      <Authenticator formFields={formFields} components={components}>
        {({ signOut, user }) => (
          <main>
            <h1>{user?.signInDetails?.loginId}</h1>
            <button onClick={signOut}>Sign out</button>
            <button onClick={sayHello}>Say Hello</button>
            <div>{greeting}</div>
          </main>
        )}
      </Authenticator>
    </Flex>
  )
}

export default Home
