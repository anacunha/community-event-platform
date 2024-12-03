import { Authenticator, Flex, Heading } from '@aws-amplify/ui-react';
import { SessionCreateForm } from '../../ui-components';
import { Header } from '../components';
import { useNavigate } from 'react-router-dom';

function CreateSession() {

  const navigate = useNavigate(); // Declare the hook at component level

  return (
    <Authenticator>
      {({ signOut }) => (
        <main>
          <Header signOut={signOut} />
          <Flex
            gap="24px"
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            position="relative"
            padding="48px"
            backgroundColor="rgba(255,255,255,1)"
          >
            <Heading level={4} color="rgba(105,79,178,1)">Submit your session</Heading>
            <SessionCreateForm onSuccess={() => (
              navigate('/')
            )} />
          </Flex>
        </main>
      )}
    </Authenticator>
  );
}

export default CreateSession;
