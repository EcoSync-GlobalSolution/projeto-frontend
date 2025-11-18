// src/routes/Contato/index.tsx
import { useState } from "react";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com backend ou API de envio de email
    console.log("Dados enviados:", formData);
    setStatus("Mensagem enviada com sucesso!");
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-gray-800 dark:to-gray-700 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold">Entre em Contato</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          Tem dúvidas ou quer saber mais sobre a EcoSync? Fale com a nossa equipe!
        </p>
      </section>

      {/* Formulário */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 space-y-6 border border-gray-200 dark:border-gray-700"
        >
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={5}
              value={formData.mensagem}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-green-600"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition"
          >
            Enviar Mensagem
          </button>

          {status && (
            <p className="mt-4 text-center text-green-600 dark:text-green-400 font-medium">
              {status}
            </p>
          )}
        </form>
      </section>

      {/* Informações adicionais */}
      <section className="mx-auto max-w-3xl px-6 pb-16 text-center">
        <h2 className="text-xl font-semibold">Outros canais</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Você também pode nos encontrar nas redes sociais ou enviar um email para{" "}
          <span className="font-medium text-green-700 dark:text-green-400">contato@ecosync.com</span>.
        </p>
      </section>
    </div>
  );
}
