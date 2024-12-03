import { useEffect, useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import Header from "../components/Header";
import { Authenticator, Flex, Heading, Image, useTheme, View } from '@aws-amplify/ui-react';

const client = generateClient<Schema>({
  authMode: 'userPool',
});

function Home() {
  const [sessions, setSessions] = useState<Array<Schema["Session"]["type"]>>([]);

  useEffect(() => {
    client.models.Session.observeQuery().subscribe({
      next: (data) => setSessions([...data.items]),
    });
  }, []);

  const { tokens } = useTheme();

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

  const components = {
    Header() {
      return (
        <>
          <Flex
            justifyContent="center"
            alignItems="center"
            backgroundColor="rgba(199,187,235,1)"
            style={{ minHeight: '20vh', paddingTop: '20px', paddingLeft: '20px', paddingRight: '20px' }}
            direction="column"
          >
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
          </Flex>
        </>
      );
    },

    Footer() {
      return (
        <Flex
          justifyContent="center"
          alignItems="center"
          backgroundColor="rgba(199,187,235,1)"
          style={{ minHeight: '20vh', paddingTop: '20px', paddingLeft: '20px', paddingRight: '20px' }}
          direction="column"
        >
        </Flex>
      )
    }
  }

  return (
    <Authenticator formFields={formFields} components={components}>
      {({ signOut }) => (
        <main>
          <Header signOut={signOut} />
          <h1>My Sessions</h1>
          <ul>
            {sessions.map((session) => (
              <li key={session.id}>{session.title}</li>
            ))}
          </ul>
        </main>
      )}
    </Authenticator>
  )
}

export default Home
