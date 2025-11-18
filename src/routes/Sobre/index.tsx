// src/routes/Sobre/index.tsx
export default function Sobre() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-100 to-blue-100 dark:from-gray-800 dark:to-gray-700 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
          Sobre a <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">EcoSync</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          Conectamos universidades, ONGs e empresas em projetos reais que unem educação, impacto social e métricas ESG.
        </p>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Missão",
            desc: "Transformar conhecimento acadêmico e voluntariado em impacto social mensurável.",
            icon: "🌱",
          },
          {
            title: "Visão",
            desc: "Ser a principal plataforma que conecta educação e sustentabilidade até 2030.",
            icon: "🌍",
          },
          {
            title: "Valores",
            desc: "Inclusão, inovação, colaboração e compromisso com os Objetivos de Desenvolvimento Sustentável.",
            icon: "🤝",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="text-4xl">{item.icon}</div>
            <h3 className="mt-4 text-xl font-semibold text-green-700 dark:text-green-400">{item.title}</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* ODS da ONU */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Alinhamento com os ODS da ONU</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            A EcoSync contribui diretamente para os Objetivos de Desenvolvimento Sustentável:
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["ODS 4: Educação de qualidade", "ODS 8: Trabalho decente e crescimento econômico", "ODS 9: Indústria, inovação e infraestrutura", "ODS 10: Redução das desigualdades"].map((ods, i) => (
              <div
                key={i}
                className="rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 p-4 shadow-sm"
              >
                <p className="text-sm font-medium text-green-700 dark:text-green-400">{ods}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Propósito / CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">Nosso propósito</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          Acreditamos que tecnologia e educação podem caminhar juntas para criar um futuro mais justo, inclusivo e sustentável.
        </p>
        <a
          href="/integrantes"
          className="mt-6 inline-block px-6 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition"
        >
          Conheça nossa equipe
        </a>
      </section>
    </div>
  );
}
