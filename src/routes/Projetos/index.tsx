import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Comentario = {
  autor: string;
  texto: string;
};

type Projeto = {
  id?: number;
  titulo: string;
  descricao: string;
  categoria?: string;
  likes: number;
  comentarios: Comentario[];
};

export default function Projetos() {
  const navigate = useNavigate();
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  const [novoProjeto, setNovoProjeto] = useState({
    titulo: "",
    descricao: "",
    categoria: "",
  });

  // 🚨 Verificação de login
  useEffect(() => {
    const logado = localStorage.getItem("usuarioLogado");
    if (!logado) {
      navigate("/login"); // redireciona para login se não estiver logado
    }
  }, [navigate]);

  // 📡 Buscar projetos da API
  useEffect(() => {
    async function fetchProjetos() {
      try {
        setCarregando(true);
        const res = await fetch("https://projeto-java-6zhr.onrender.com/projetos", {
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error("Erro ao carregar projetos da API");
        const data = await res.json();

        // Mapeia os dados da API para o modelo local
        const mapped: Projeto[] = data.map((p: any) => ({
          id: p.id,
          titulo: p.nome ?? p.titulo ?? "Sem título",
          descricao: p.descricao ?? "Sem descrição",
          categoria: p.categoria ?? "Não informado",
          likes: 0,
          comentarios: [],
        }));

        setProjetos(mapped);
        setErro(null);
      } catch (e: any) {
        setErro(e.message);
      } finally {
        setCarregando(false);
      }
    }
    fetchProjetos();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNovoProjeto({ ...novoProjeto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const projeto: Projeto = {
      ...novoProjeto,
      likes: 0,
      comentarios: [],
    };
    setProjetos([...projetos, projeto]); // adiciona localmente
    setNovoProjeto({ titulo: "", descricao: "", categoria: "" });
  };

  const adicionarLike = (index: number) => {
    const novosProjetos = [...projetos];
    novosProjetos[index].likes += 1;
    setProjetos(novosProjetos);
  };

  const adicionarComentario = (index: number, comentario: string) => {
    const novosProjetos = [...projetos];
    novosProjetos[index].comentarios.push({ autor: "Usuário", texto: comentario });
    setProjetos(novosProjetos);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-16">
      <h1 className="text-3xl font-bold text-center mb-10">Projetos</h1>

      {/* Status de carregamento/erro */}
      {carregando && <p className="text-center text-gray-600">Carregando projetos...</p>}
      {erro && <p className="text-center text-red-600">{erro}</p>}

      {/* Formulário de Cadastro */}
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg space-y-6 border border-gray-200 dark:border-gray-700 mb-12"
      >
        <h2 className="text-xl font-semibold">Cadastrar Novo Projeto</h2>
        <input
          type="text"
          name="titulo"
          placeholder="Título do Projeto"
          value={novoProjeto.titulo}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-md border bg-gray-50 dark:bg-gray-900"
        />
        <textarea
          name="descricao"
          placeholder="Descrição"
          value={novoProjeto.descricao}
          onChange={handleChange}
          rows={4}
          required
          className="w-full px-4 py-2 rounded-md border bg-gray-50 dark:bg-gray-900"
        />
        <input
          type="text"
          name="categoria"
          placeholder="Categoria (ex: Educação, Saúde)"
          value={novoProjeto.categoria}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-md border bg-gray-50 dark:bg-gray-900"
        />
        <button
          type="submit"
          className="w-full py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition"
        >
          Cadastrar Projeto
        </button>
      </form>

      {/* Lista de Projetos */}
      <div className="max-w-5xl mx-auto grid gap-8">
        {projetos.map((p, idx) => (
          <div
            key={p.id ?? idx}
            className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md p-6"
          >
            <h3 className="text-xl font-semibold text-green-700 dark:text-green-400">{p.titulo}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Categoria: {p.categoria}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{p.descricao}</p>

            {/* Likes */}
            <div className="mt-4 flex items-center gap-4">
              <button
                onClick={() => adicionarLike(idx)}
                className="px-4 py-2 rounded-full bg-green-600 text-white text-sm hover:bg-green-700 transition"
              >
                Curtir ❤️
              </button>
              <span className="text-gray-700 dark:text-gray-300">{p.likes} likes</span>
            </div>

            {/* Comentários */}
            <div className="mt-6">
              <h4 className="font-semibold">Comentários:</h4>
              <ul className="mt-2 space-y-2">
                {p.comentarios.map((c, i) => (
                  <li key={i} className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>{c.autor}:</strong> {c.texto}
                  </li>
                ))}
              </ul>

              {/* Adicionar comentário */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const comentario = (e.currentTarget.elements.namedItem("comentario") as HTMLInputElement).value;
                  if (comentario.trim()) {
                    adicionarComentario(idx, comentario);
                    (e.currentTarget.elements.namedItem("comentario") as HTMLInputElement).value = "";
                  }
                }}
                className="mt-4 flex gap-2"
              >
                <input
                  type="text"
                  name="comentario"
                  placeholder="Escreva um comentário..."
                  className="flex-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-gray-900"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
                >
                  Comentar
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
