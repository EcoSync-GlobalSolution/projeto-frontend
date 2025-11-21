import gabriel from '../../Images/gabriel.jpg';
import jose from '../../Images/jose.jpeg';
import arthur from '../../Images/arthur.jpg';

type Integrante = {
  nome: string;
  descricao: string;
  rm: string;
  turma: string;
  github: string;
  linkedin: string;
  foto: string;
};

const integrantes: Integrante[] = [
  {
    nome: "Gabriel Henrique Souza Gonçalves",
    descricao: "Responsável pela interface e experiência do usuário na plataforma EcoSync.",
    rm: "RM563732",
    turma: "1TDSPI",
    github: "https://github.com/gabrielhensg",
    linkedin: "https://www.linkedin.com/in/gabriel-henrique-gon%C3%A7alves-6b27a936a/",
    foto: gabriel,
  },
  {
    nome: "José Ricardo Pereira Iannuzzi",
    descricao: "Cuida da integração com APIs e da lógica de negócios em Java/Quarkus.",
    rm: "RM564112",
    turma: "1TDSPI",
    github: "https://github.com/jr-iannuzzi",
    linkedin: "https://www.linkedin.com/in/josé-iannuzzi-916299388?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    foto: jose,
  },
  {
    nome: "Arthur Correia Delila",
    descricao: "Desenvolve modelos de IA para mensuração de impacto e dashboards ESG.",
    rm: "RM563806",
    turma: "1TDSPI",
    github: "https://github.com/artcorreia",
    linkedin: "https://www.linkedin.com/in/artcorreia/",
    foto: arthur,
  },
];

export default function Integrantes() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <section className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-gray-800 dark:to-gray-700 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold">Nossa Equipe</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          Conheça os integrantes que estão construindo o futuro do trabalho com a EcoSync.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {integrantes.map((i, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={i.foto}
              alt={i.nome}
              className="h-64 w-full object-cover object-center rounded-t-xl"
            />
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-green-700 dark:text-green-400">{i.nome}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                RM: <span className="font-medium">{i.rm}</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Turma: <span className="font-medium">{i.turma}</span>
              </p>
              <p className="text-gray-700 dark:text-gray-300">{i.descricao}</p>
              <div className="flex gap-4 pt-2">
                <a
                  href={i.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={i.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
