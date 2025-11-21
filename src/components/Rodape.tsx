export default function Rodape() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} EcoSync — Conectando educação, impacto social e ESG.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a className="text-gray-700 dark:text-gray-300 hover:text-green-600" href="/sobre">Sobre</a>
          <a className="text-gray-700 dark:text-gray-300 hover:text-green-600" href="/faq">FAQ</a>
          <a className="text-gray-700 dark:text-gray-300 hover:text-green-600" href="/contato">Contato</a>
        </div>
      </div>
    </footer>
  );
}
