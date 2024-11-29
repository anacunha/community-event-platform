import { generateClient } from 'aws-amplify/api';
import type { Schema } from '../amplify/data/resource';
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

  return (
    <Authenticator>
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
