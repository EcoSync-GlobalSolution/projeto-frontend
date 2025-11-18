// src/App.tsx
import { Outlet } from 'react-router-dom';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';

export default function App() {
  return (
    <>
      <Cabecalho />
      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <Outlet />
      </main>
      <Rodape />
    </>
  );
}
