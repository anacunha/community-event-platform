import { useEffect, useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import Header from "../components/Header";
import { Authenticator } from "@aws-amplify/ui-react";

const client = generateClient<Schema>({
  authMode: 'userPool',
});

function Dashboard() {
  const [sessions, setSessions] = useState<Array<Schema["Session"]["type"]>>([]);

  useEffect(() => {
    client.models.Session.observeQuery().subscribe({
      next: (data) => setSessions([...data.items]),
    });
  }, []);

  return (
    <Authenticator>
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
  );
}

export default Dashboard;