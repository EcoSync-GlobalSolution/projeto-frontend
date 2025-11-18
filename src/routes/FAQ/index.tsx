// src/routes/FAQ/index.tsx
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "O que é a EcoSync?",
    answer:
      "A EcoSync é uma plataforma que conecta universidades, ONGs e empresas em projetos reais, transformando conhecimento acadêmico e voluntariado em impacto social mensurável.",
  },
  {
    question: "Quem pode usar a plataforma?",
    answer:
      "Universidades, ONGs e empresas são os principais parceiros. Estudantes e voluntários participam dos projetos, mas não são os pagadores diretos.",
  },
  {
    question: "Como funciona o modelo de negócios?",
    answer:
      "A EcoSync oferece licenças acadêmicas, planos escaláveis para ONGs, patrocínios e certificações de impacto para empresas.",
  },
  {
    question: "A plataforma é alinhada aos ODS da ONU?",
    answer:
      "Sim! A EcoSync contribui para ODS 4 (Educação de qualidade), ODS 8 (Trabalho decente), ODS 9 (Inovação e infraestrutura) e ODS 10 (Redução das desigualdades).",
  },
  {
    question: "Preciso pagar para participar como estudante ou voluntário?",
    answer:
      "Não. O acesso para estudantes e voluntários é gratuito, pois o modelo é B2B2C. As instituições são responsáveis pelo contrato.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-gray-800 dark:to-gray-700 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold">
          Perguntas Frequentes
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          Encontre respostas rápidas sobre como a EcoSync funciona e como você
          pode participar.
        </p>
      </section>

      {/* FAQ Accordion */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-200 dark:border-gray-700 py-4"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left focus:outline-none"
            >
              <span className="text-lg font-medium text-green-700 dark:text-green-400">
                {item.question}
              </span>
              <span className="ml-2">
                {openIndex === index ? (
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                )}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-700 dark:text-gray-300">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
