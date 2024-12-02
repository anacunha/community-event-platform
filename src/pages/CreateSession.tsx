import { Authenticator } from '@aws-amplify/ui-react';
import { SessionCreateForm } from '../../ui-components';
import { Header } from '../components';

function CreateSession() {

  return (
    <Authenticator>
      {({ signOut }) => (
        <main>
          <Header signOut={signOut} />
          <h1>Create Session</h1>
          <SessionCreateForm />
        </main>
      )}
    </Authenticator>
  );
}

export default CreateSession;
