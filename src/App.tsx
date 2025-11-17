// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Sobre from './routes/Sobre';
import FAQ from './routes/FAQ';
import Contato from './routes/Contato';
import Integrantes from './routes/Integrantes';
import ErrorPage from './routes/Error';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/integrantes" element={<Integrantes />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
