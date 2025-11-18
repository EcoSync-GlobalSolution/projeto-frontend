// src/routes/Integrantes/index.tsx
type Integrante = {
  nome: string;
  funcao: string;
  descricao: string;
  foto: string;
};

const integrantes: Integrante[] = [
  {
    nome: "Gabriel Silva",
    funcao: "Front-End Developer",
    descricao: "Responsável pela interface e experiência do usuário na plataforma EcoSync.",
    foto: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=300&h=300&fit=crop",
  },
  {
    nome: "Maria Oliveira",
    funcao: "Back-End Developer",
    descricao: "Cuida da integração com APIs e da lógica de negócios em Java/Quarkus.",
    foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&h=300&fit=crop",
  },
  {
    nome: "João Pereira",
    funcao: "Data Scientist",
    descricao: "Desenvolve modelos de IA para mensuração de impacto e dashboards ESG.",
    foto: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=300&h=300&fit=crop",
  },
];

export default function Integrantes() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-gray-800 dark:to-gray-700 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold">Nossa Equipe</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          Conheça os integrantes que estão construindo o futuro do trabalho com a EcoSync.
        </p>
      </section>

      {/* Cards de Integrantes */}
      <section className="mx-auto max-w-7xl px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {integrantes.map((i, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={i.foto}
              alt={i.nome}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-700 dark:text-green-400">{i.nome}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{i.funcao}</p>
              <p className="mt-3 text-gray-700 dark:text-gray-300">{i.descricao}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
