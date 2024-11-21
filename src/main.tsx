import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import App from './App.tsx';
import outputs from '../amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs)

createRoot(document.getElementById('root')!).render(
  <Authenticator>
    <StrictMode>
      <App />
    </StrictMode>
  </Authenticator>
);
