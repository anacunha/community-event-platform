import { generateClient } from 'aws-amplify/api';
import type { Schema } from '../../amplify/data/resource';
import { useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';

const client = generateClient<Schema>({
  authMode: 'userPool',
});

function App() {
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

  return (
    <Authenticator formFields={formFields}>
      {({ signOut, user }) => (
        <main>
          <h1>{user?.signInDetails?.loginId}</h1>
          <button onClick={signOut}>Sign out</button>
          <button onClick={sayHello}>Say Hello</button>
          <div>{greeting}</div>
        </main>
      )}
    </Authenticator>
  )
}

export default App
