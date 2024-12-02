import { useEffect, useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

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
    <main>
      <h1>My Sessions</h1>
      <ul>
        {sessions.map((session) => (
          <li key={session.id}>{session.title}</li>
        ))}
      </ul>
    </main>
  );
}

export default Dashboard;