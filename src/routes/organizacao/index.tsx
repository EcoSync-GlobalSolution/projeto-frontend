import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { listarOrganizacoes } from '../../services/organizacoes.tsx';

type OrganizacaoView = {
  id: number;
  nome: string;
  descricao: string;
  categoria?: string;
  area?: string;
  cidade?: string;
  estado?: string;
  site?: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
};

export default function Organizacoes() {
  const navigate = useNavigate();
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);
  const [organizacoes, setOrganizacoes] = useState<OrganizacaoView[]>([]);

  const [busca, setBusca] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState<string>('');
  const [filtroArea, setFiltroArea] = useState<string>('');
  const [ordenacao, setOrdenacao] = useState<'nome-asc' | 'nome-desc'>('nome-asc');

 
  useEffect(() => {
    const logado = localStorage.getItem('usuarioLogado');
    if (!logado) navigate('/login');
  }, [navigate]);

  useEffect(() => {
    async function fetchData() {
      try {
        setCarregando(true);
        const data = await listarOrganizacoes();
        const mapped: OrganizacaoView[] = data.map((o) => ({
          id: o.id,
          nome: o.nome,
          descricao: o.descricao ?? 'Sem descrição',
          categoria: o.categoria,
          area: o.area,
          cidade: o.cidade,
          estado: o.estado,
          site: o.site,
          linkedin: o.linkedin,
          github: o.github,
          instagram: o.instagram,
        }));
        setOrganizacoes(mapped);
        setErro(null);
      } catch (e: any) {
        setErro(e.message ?? 'Falha ao carregar organizações');
      } finally {
        setCarregando(false);
      }
    }
    fetchData();
  }, []);

  const categorias = useMemo(() => {
    const set = new Set(organizacoes.map((o) => o.categoria).filter(Boolean));
    return Array.from(set);
  }, [organizacoes]);

  const areas = useMemo(() => {
    const set = new Set(organizacoes.map((o) => o.area).filter(Boolean));
    return Array.from(set);
  }, [organizacoes]);

  const filtradas = useMemo(() => {
    let lista = [...organizacoes];

    if (busca.trim()) {
      const q = busca.toLowerCase();
      lista = lista.filter(
        (o) =>
          o.nome.toLowerCase().includes(q) ||
          o.descricao.toLowerCase().includes(q) ||
          (o.categoria?.toLowerCase().includes(q) ?? false) ||
          (o.area?.toLowerCase().includes(q) ?? false) ||
          (o.cidade?.toLowerCase().includes(q) ?? false) ||
          (o.estado?.toLowerCase().includes(q) ?? false)
      );
    }

    if (filtroCategoria) lista = lista.filter((o) => o.categoria === filtroCategoria);
    if (filtroArea) lista = lista.filter((o) => o.area === filtroArea);

    lista.sort((a, b) =>
      ordenacao === 'nome-asc' ? a.nome.localeCompare(b.nome) : b.nome.localeCompare(a.nome)
    );

    return lista;
  }, [organizacoes, busca, filtroCategoria, filtroArea, ordenacao]);

  // Paginação simples no front
  const [pagina, setPagina] = useState(1);
  const porPagina = 9;
  const totalPaginas = Math.max(1, Math.ceil(filtradas.length / porPagina));
  const paginaAtual = filtradas.slice((pagina - 1) * porPagina, pagina * porPagina);

  useEffect(() => {
    
    setPagina(1);
  }, [busca, filtroCategoria, filtroArea, ordenacao]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      
      <section className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-gray-800 dark:to-gray-700 py-14 text-center px-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold">Organizações parceiras</h1>
        <p className="mt-3 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          Explore organizações do ecossistema e acesse suas páginas para saber mais, acompanhar projetos e oportunidades.
        </p>
      </section>

   
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid md:grid-cols-4 gap-4">
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar por nome, área, cidade..."
            className="px-4 py-2 rounded-md border bg-gray-50 dark:bg-gray-800"
          />
          <select
            value={filtroCategoria}
            onChange={(e) => setFiltroCategoria(e.target.value)}
            className="px-4 py-2 rounded-md border bg-gray-50 dark:bg-gray-800"
          >
            <option value="">Todas categorias</option>
            {categorias.map((c) => (
              <option key={c} value={c!}>
                {c}
              </option>
            ))}
          </select>
          <select
            value={filtroArea}
            onChange={(e) => setFiltroArea(e.target.value)}
            className="px-4 py-2 rounded-md border bg-gray-50 dark:bg-gray-800"
          >
            <option value="">Todas áreas</option>
            {areas.map((a) => (
              <option key={a} value={a!}>
                {a}
              </option>
            ))}
          </select>
          <select
            value={ordenacao}
            onChange={(e) => setOrdenacao(e.target.value as 'nome-asc' | 'nome-desc')}
            className="px-4 py-2 rounded-md border bg-gray-50 dark:bg-gray-800"
          >
            <option value="nome-asc">Ordenar: Nome A–Z</option>
            <option value="nome-desc">Ordenar: Nome Z–A</option>
          </select>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        {carregando && (
          <div className="text-center py-8 text-gray-600 dark:text-gray-400">Carregando organizações...</div>
        )}
        {erro && <div className="text-center py-8 text-red-600">{erro}</div>}
      </section>

     
      {!carregando && !erro && (
        <section className="mx-auto max-w-7xl px-6 pb-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginaAtual.map((o) => (
            <div
              key={o.id}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md overflow-hidden"
            >
             
              <div className="h-36 w-full bg-gradient-to-r from-green-200 to-blue-200 dark:from-gray-700 dark:to-gray-600" />
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">{o.nome}</h3>
                {o.categoria && (
                  <p className="text-xs text-gray-600 dark:text-gray-400">Categoria: {o.categoria}</p>
                )}
                {o.area && <p className="text-xs text-gray-600 dark:text-gray-400">Área: {o.area}</p>}
                {(o.cidade || o.estado) && (
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Local: {o.cidade ?? ''} {o.estado ? `- ${o.estado}` : ''}
                  </p>
                )}
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 line-clamp-3">{o.descricao}</p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {o.site && (
                    <a
                      href={o.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-700 dark:text-blue-400 hover:underline"
                    >
                      Site
                    </a>
                  )}
                  {o.linkedin && (
                    <a
                      href={o.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-700 dark:text-blue-400 hover:underline"
                    >
                      LinkedIn
                    </a>
                  )}
                  {o.github && (
                    <a
                      href={o.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-700 dark:text-blue-400 hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                  {o.instagram && (
                    <a
                      href={o.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-700 dark:text-blue-400 hover:underline"
                    >
                      Instagram
                    </a>
                  )}
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <Link
                    to={`/organizacoes/${o.id}`}
                    className="inline-block px-4 py-2 rounded-full bg-green-600 text-white text-sm hover:bg-green-700 transition"
                  >
                    Ver detalhes
                  </Link>
                  {o.site && (
                    <a
                      href={o.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 rounded-full border border-green-600 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-gray-800 text-sm transition"
                    >
                      Acessar site
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

     
      {!carregando && !erro && totalPaginas > 1 && (
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="flex justify-center gap-2">
            <button
              onClick={() => setPagina((p) => Math.max(1, p - 1))}
              className="px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              ←
            </button>
            <span className="px-3 py-2 text-sm">Página {pagina} de {totalPaginas}</span>
            <button
              onClick={() => setPagina((p) => Math.min(totalPaginas, p + 1))}
              className="px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              →
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
