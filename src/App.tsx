import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateSession, Home } from './pages';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/session/new" element={<CreateSession />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
