// src/routes/Login/index.tsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [logado, setLogado] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const usuarioLogado = localStorage.getItem("usuarioLogado");
    if (usuarioLogado) setLogado(true);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && senha) {
      localStorage.setItem("usuarioLogado", "true");
      setLogado(true);
      navigate("/projetos"); // redireciona para página de projetos
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    setLogado(false);
    setEmail("");
    setSenha("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-200 via-blue-200 to-green-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-700 dark:text-green-400 mb-6">
          {logado ? "Bem-vindo de volta!" : "Login"}
        </h2>

        {!logado ? (
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Senha
              </label>
              <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition"
            >
              Entrar
            </button>
          </form>
        ) : (
          <div className="text-center space-y-6">
            <p className="text-gray-700 dark:text-gray-300">
              Você já está logado. Agora pode acessar seus projetos!
            </p>
            <button
              onClick={handleLogout}
              className="w-full py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition"
            >
              Sair (Logout)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
