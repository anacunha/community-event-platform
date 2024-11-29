import { generateClient } from 'aws-amplify/api';
import type { Schema } from '../amplify/data/resource';
import { useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';

const client = generateClient<Schema>({
  authMode: 'userPool',
});

function App() {
  const [greeting, setGreeting] = useState<string | null>(null);

  const sayHello = async () => {
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
    <>
      <Authenticator>
        <h1>Event</h1>
        <button onClick={sayHello}>Say Hello</button>
        <div>{ greeting }</div>
      </Authenticator>
    </>
  )
}

export default App
