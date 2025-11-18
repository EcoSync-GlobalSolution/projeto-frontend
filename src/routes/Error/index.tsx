// src/routes/Error/index.tsx
import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6">
      {/* Ícone */}
      <div className="text-6xl mb-4">⚠️</div>

      {/* Título */}
      <h1 className="text-4xl font-bold text-red-600">Oops! Algo deu errado.</h1>

      {/* Mensagem */}
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 text-center max-w-xl">
        Não conseguimos encontrar a página que você está procurando ou ocorreu um erro inesperado.
      </p>

      {/* Detalhes do erro (opcional) */}
      {error && (
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          <i>{error.statusText || error.message}</i>
        </p>
      )}

      {/* Botão para voltar */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition"
      >
        Voltar para a Home
      </Link>
    </div>
  );
}
