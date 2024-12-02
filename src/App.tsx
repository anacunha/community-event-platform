import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateSession, Dashboard, Home } from './pages';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/session/new" element={<CreateSession />} />
      <Route path="/sessions" element={<Dashboard />} />
      <Route path="/profile" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
