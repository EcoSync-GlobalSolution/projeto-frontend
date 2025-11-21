const BASE_URL = 'https://projeto-java-6zhr.onrender.com';

export type ProjetoApi = {
  id: number;
  nome: string;        
  descricao: string;
  categoria?: string;
};

export async function listarProjetos(): Promise<ProjetoApi[]> {
  const res = await fetch(`${BASE_URL}/projetos`, {
    headers: {
      'Accept': 'application/json',
    },
  });
  if (!res.ok) {
    throw new Error(`Erro ao buscar projetos: ${res.status}`);
  }
  return res.json();
}
