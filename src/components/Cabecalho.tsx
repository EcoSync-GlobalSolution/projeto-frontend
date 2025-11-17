import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Cabecalho() {
  const [dark, setDark] = useState<boolean>(() => {
    const stored = localStorage.getItem('ecosync-theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('ecosync-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('ecosync-theme', 'light');
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo-ecosync.png" alt="EcoSync" className="h-9 w-9 rounded-full shadow-sm" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
            EcoSync
          </span>
        </Link>

        <ul className="flex items-center gap-6 text-sm font-medium">
          <li><NavLink to="/" className="hover:text-green-600">Início</NavLink></li>
          <li><NavLink to="/sobre" className="hover:text-green-600">Sobre</NavLink></li>
          <li><NavLink to="/faq" className="hover:text-green-600">FAQ</NavLink></li>
          <li><NavLink to="/contato" className="hover:text-green-600">Contato</NavLink></li>
          <li><NavLink to="/integrantes" className="hover:text-green-600">Integrantes</NavLink></li>
          <li>
            <button
              onClick={() => setDark((v) => !v)}
              className="rounded-full p-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              title={dark ? 'Tema escuro' : 'Tema claro'}
            >
              {dark ? (
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-yellow-400"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-orange-500"><path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.8 1.8-1.8zM1 13h3v-2H1v2zm10-9h2V1h-2v3zm7.07.17l-1.8 1.8 1.8 1.79 1.79-1.79-1.79-1.8zM20 11v2h3v-2h-3zm-9 9h2v3h-2v-3zm-6.83-.17l1.8-1.8-1.8-1.79-1.79 1.79 1.79 1.8zM17.24 19.16l1.8 1.79 1.79-1.79-1.79-1.8-1.8 1.8zM12 7a5 5 0 100 10 5 5 0 000-10z" /></svg>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
