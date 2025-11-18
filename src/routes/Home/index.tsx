import { useEffect, useMemo, useRef, useState } from 'react';
import Cabecalho from '../../components/Cabecalho';
import Rodape from '../../components/Rodape';

type Depoimento = {
  nome: string;
  papel: string;
  texto: string;
  avatar: string;
};

export default function Home() {
  // Contadores de impacto
  const [projects, setProjects] = useState(0);
  const [volunteers, setVolunteers] = useState(0);
  const [ods, setOds] = useState(0);

  useEffect(() => {
    const animate = (setter: (n: number) => void, target: number, duration = 1200) => {
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setter(Math.floor(progress * target));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    animate(setProjects, 128);
    animate(setVolunteers, 3500);
    animate(setOds, 17);
  }, []);

  // Carrossel simples
  const depoimentos: Depoimento[] = useMemo(
    () => [
      {
        nome: 'Ana Souza',
        papel: 'Coordenadora de Extensão (Universidade X)',
        texto:
          'A EcoSync transformou projetos acadêmicos em experiências reais com impacto mensurável. Os dashboards facilitaram a prestação de contas.',
        avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&h=200&fit=crop',
      },
      {
        nome: 'Lucas Pereira',
        papel: 'Diretor de Inovação (ONG VerdeMais)',
        texto:
          'Conseguimos atrair voluntários qualificados e comprovar indicadores ESG. O matching foi certeiro.',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&h=200&fit=crop',
      },
      {
        nome: 'Marina Alves',
        papel: 'Analista ESG (Empresa Delta)',
        texto:
          'Integração fluida e relatórios confiáveis. A certificação de impacto elevou nosso nível de governança.',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop',
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % depoimentos.length);
    }, 4000);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [depoimentos.length]);

  const goPrev = () => setIndex((i) => (i - 1 + depoimentos.length) % depoimentos.length);
  const goNext = () => setIndex((i) => (i + 1) % depoimentos.length);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Cabecalho />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-100 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-900" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Conecte universidades, ONGs e empresas.
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
                Gere impacto real com EcoSync.
              </span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-700 dark:text-gray-300">
              Plataforma que transforma projetos acadêmicos e voluntariado em indicadores ESG mensuráveis,
              alinhados aos ODS.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/sobre"
                className="px-6 py-3 rounded-full bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition"
              >
                Conheça a plataforma
              </a>
              <a
                href="/contato"
                className="px-6 py-3 rounded-full border border-green-600 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-gray-800 transition"
              >
                Solicite uma demonstração
              </a>
            </div>

            {/* Indicadores */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 text-center">
                <div className="text-3xl font-bold text-green-600">{projects}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projetos ativos</div>
              </div>
              <div className="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 text-center">
                <div className="text-3xl font-bold text-blue-600">{volunteers}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Voluntários engajados</div>
              </div>
              <div className="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 text-center">
                <div className="text-3xl font-bold text-green-600">{ods}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">ODS alinhados</div>
              </div>
            </div>
          </div>

          {/* Imagem hero */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=1200&fit=crop"
              alt="Colaboração e impacto"
              className="rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
            />
            <img
              src="/logo-ecosync.png"
              alt="EcoSync"
              className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full shadow-lg ring-4 ring-white dark:ring-gray-900"
            />
          </div>
        </div>
      </section>

      {/* Parceiros */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
          Em parceria com instituições comprometidas com ESG
        </p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
          {['https://images.unsplash.com/photo-1506790409786-287062b21cfe',
            'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61',
            'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
            'https://images.unsplash.com/photo-1515187029135-18ee286d815b'
          ].map((src, i) => (
            <img
              key={i}
              src={`${src}?q=80&w=300&h=120&fit=crop`}
              alt={`Parceiro ${i + 1}`}
              className="h-12 w-full object-cover rounded-lg opacity-80 hover:opacity-100 transition"
            />
          ))}
        </div>
      </section>

      {/* Recursos */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold">Recursos principais</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Tudo que você precisa para conectar e mensurar impacto com transparência.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Matching inteligente',
              desc: 'Conecte talentos a causas e empresas com critérios objetivos.',
              img: 'https://images.unsplash.com/photo-1531536720357-3c1f95e5d4f3',
            },
            {
              title: 'Dashboards ESG',
              desc: 'Indicadores claros e auditáveis, alinhados aos ODS.',
              img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
            },
            {
              title: 'Certificação de impacto',
              desc: 'Relatórios e selos digitais para projetos auditados.',
              img: 'https://images.unsplash.com/photo-1550565118-3a14e7a231d1',
            },
          ].map((f, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition"
            >
              <img
                src={`${f.img}?q=80&w=900&h=500&fit=crop`}
                alt={f.title}
                className="h-40 w-full object-cover group-hover:scale-[1.02] transition"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">{f.title}</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{f.desc}</p>
                <a href="/sobre" className="mt-4 inline-block text-sm text-blue-700 dark:text-blue-400 hover:underline">
                  Saber mais →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold">Como funciona</h2>
        <div className="mt-8 grid lg:grid-cols-3 gap-8">
          {[
            { step: '1', title: 'Cadastre-se', desc: 'Instituições e projetos entram na plataforma.' },
            { step: '2', title: 'Conecte e execute', desc: 'Matching de talentos e gestão das atividades.' },
            { step: '3', title: 'Mensurando impacto', desc: 'Dashboards ESG e certificação dos resultados.' },
          ].map((s, i) => (
            <div key={i} className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-800">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-green-100 text-green-700 font-bold">
                {s.step}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos com carrossel */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold">Quem usa, recomenda</h2>
          <div className="flex gap-2">
            <button
              onClick={goPrev}
              className="px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              ←
            </button>
            <button
              onClick={goNext}
              className="px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-6 relative">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <img
                src={depoimentos[index].avatar}
                alt={depoimentos[index].nome}
                className="h-20 w-20 rounded-full object-cover ring-4 ring-white dark:ring-gray-700"
              />
              <blockquote className="text-lg text-gray-800 dark:text-gray-100">
                “{depoimentos[index].texto}”
              </blockquote>
            </div>
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              <strong>{depoimentos[index].nome}</strong> — {depoimentos[index].papel}
            </div>
          </div>

          {/* indicadores de posição */}
          <div className="mt-4 flex justify-center gap-2">
            {depoimentos.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === index ? 'bg-green-600' : 'bg-gray-300 dark:bg-gray-700'
                }`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl bg-gradient-to-r from-green-600 to-blue-600 p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">Pronto para sincronizar impacto com educação?</h3>
            <p className="mt-2 text-white/90">
              Solicite uma demo e conheça como a EcoSync pode elevar seus projetos e relatórios ESG.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="/contato"
              className="px-6 py-3 rounded-full bg-white text-green-700 font-semibold hover:bg-white/90 transition"
            >
              Falar com o time
            </a>
            <a
              href="/sobre"
              className="px-6 py-3 rounded-full bg-white/20 text-white font-semibold hover:bg-white/30 transition"
            >
              Ver recursos
            </a>
          </div>
        </div>
      </section>

      <Rodape />
    </div>
  );
}
