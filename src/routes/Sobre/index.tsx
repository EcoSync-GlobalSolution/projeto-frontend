export default function Sobre() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-green-100 to-blue-100 dark:from-gray-800 dark:to-gray-700 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
          Sobre a <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">EcoSync</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          Conectamos universidades, ONGs e empresas em projetos reais que unem educação, impacto social e métricas ESG.
        </p>
      </section>

      {/* Missão, Visão, Valores */}
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
          <div key={i} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition">
            <div className="text-4xl">{item.icon}</div>
            <h3 className="mt-4 text-xl font-semibold text-green-700 dark:text-green-400">{item.title}</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Oportunidade e Modelo de Negócio */}
      <section className="mx-auto max-w-5xl px-6 py-16 space-y-10">
        <div>
          <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">Oportunidade Identificada</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            A ausência de uma plataforma integrada que conecte universidades, ONGs e empresas de forma estruturada e mensurável representa uma oportunidade clara de inovação e transformação social.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">Modelo de Negócio</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
            <li>Licenças acadêmicas para universidades</li>
            <li>Planos escaláveis para ONGs</li>
            <li>Patrocínios e hubs ESG para empresas</li>
            <li>Certificação de impacto para projetos auditados</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">Relacionamento e Inovação</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            A EcoSync adota um modelo B2B com elementos B2B2C, e propõe uma inovação incremental com metodologia disruptiva de mensuração de impacto alinhada aos ODS.
          </p>
        </div>
      </section>

      {/* Tecnologias */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-center">Tecnologias Aplicadas</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 dark:text-gray-300">
            {[
              "Front-end: React + Vite + TypeScript",
              "Back-end: Java com Quarkus",
              "Banco de Dados: Oracle ou PostgreSQL",
              "IA: Python + Flask para matching inteligente",
              "Infraestrutura: Render ou Railway",
              "Versionamento: GitHub",
            ].map((tech, i) => (
              <div key={i} className="rounded-lg bg-white dark:bg-gray-700 p-4 border border-gray-200 dark:border-gray-600 shadow-sm">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mercado e Concorrência */}
      <section className="mx-auto max-w-6xl px-6 py-16 space-y-10">
        <div>
          <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">Mercado-Alvo</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Universidades, ONGs, empresas e órgãos públicos que buscam integrar educação, impacto social e governança sustentável.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">Concorrência</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Ferramentas como Bennu, MapBiomas e Impacta+ atuam em áreas próximas, mas nenhuma oferece um ecossistema integrado com foco em aprendizado prático e medição automatizada de impacto.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">Diferenciais</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
            <li>Matching inteligente entre demandas sociais e talentos</li>
            <li>Relatórios automáticos por ODS</li>
            <li>Ambiente colaborativo em tempo real</li>
            <li>Modelo escalável com pacotes ESG</li>
            <li>Validação acadêmica e transparência de dados</li>
          </ul>
        </div>
      </section>

      {/* Investimento e SLA */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="mx-auto max-w-6xl px-6 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-center">Plano de Investimento</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300 text-center">
              Receita estimada: R$ 3.500,00/mês | Custo médio: R$ 2.000,00/mês | ROI: 75% no primeiro semestre
            </p>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-gray-700 dark:text-gray-300">
              {[
                { categoria: "Desenvolvimento", custo: "R$ 1.500,00", total: "R$ 9.000,00" },
                { categoria: "Infraestrutura", custo: "R$ 250,00", total: "R$ 1.500,00" },
                { categoria: "Ferramentas", custo: "R$ 100,00", total: "R$ 600,00" },
                { categoria: "Suporte", custo: "R$ 150,00", total: "R$ 900,00" },
                { categoria: "Administrativo", custo: "R$ 100,00", total: "R$ 600,00" },
              ].map((item, i) => (
                <div key={i} className="rounded-lg bg-white dark:bg-gray-700 p-4 border border-gray-200 dark:border-gray-600 shadow-sm">
                  <strong>{item.categoria}</strong>
                  <p>Custo mensal: {item.custo}</p>
                  <p>Total 6 meses: {item.total}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-center">Acordo de Nível de Serviço (SLA)</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300 text-center">
              Disponibilidade estimada: 95% | Suporte técnico em até 48h úteis | Evolução contínua da plataforma
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}