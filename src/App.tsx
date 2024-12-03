import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateSession, Dashboard } from './pages';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/session/new" element={<CreateSession />} />
      <Route path="/profile" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
