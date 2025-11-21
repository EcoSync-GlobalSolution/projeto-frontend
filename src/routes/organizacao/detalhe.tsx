// src/routes/Organizacoes/Detalhe.tsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { obterOrganizacao, type OrganizacaoApi } from '../../services/organizacoes.tsx';

export default function OrganizacaoDetalhe() {
  const { id } = useParams();
  const [org, setOrg] = useState<OrganizacaoApi | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setCarregando(true);
        const data = await obterOrganizacao(id!);
        setOrg(data);
        setErro(null);
      } catch (e: any) {
        setErro(e.message ?? 'Falha ao carregar organização');
      } finally {
        setCarregando(false);
      }
    }
    if (id) fetchData();
  }, [id]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <section className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-gray-800 dark:to-gray-700 py-14 text-center px-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold">Organização</h1>
        <p className="mt-3 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          Detalhes, contatos e projetos associados.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        {carregando && <div className="text-center">Carregando...</div>}
        {erro && <div className="text-center text-red-600">{erro}</div>}
        {org && (
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md p-6 space-y-4">
            <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">{org.nome}</h2>
            {org.categoria && <p className="text-sm text-gray-600 dark:text-gray-400">Categoria: {org.categoria}</p>}
            {org.area && <p className="text-sm text-gray-600 dark:text-gray-400">Área: {org.area}</p>}
            {(org.cidade || org.estado) && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Local: {org.cidade ?? ''} {org.estado ? `- ${org.estado}` : ''}
              </p>
            )}
            {org.descricao && <p className="text-gray-700 dark:text-gray-300">{org.descricao}</p>}

            <div className="mt-4 flex flex-wrap gap-3">
              {org.site && (
                <a href={org.site} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-700 dark:text-blue-400 hover:underline">Site</a>
              )}
              {org.linkedin && (
                <a href={org.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-700 dark:text-blue-400 hover:underline">LinkedIn</a>
              )}
              {org.github && (
                <a href={org.github} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-700 dark:text-blue-400 hover:underline">GitHub</a>
              )}
              {org.instagram && (
                <a href={org.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-700 dark:text-blue-400 hover:underline">Instagram</a>
              )}
            </div>

            <div className="mt-8 flex justify-between">
              <Link to="/organizacoes" className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800">
                Voltar
              </Link>
              <Link to="/projetos" className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700">
                Ver projetos
              </Link>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
