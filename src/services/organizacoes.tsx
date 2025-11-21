export type OrganizacaoApi = {
  id: number;
  nome: string;
  descricao?: string;
  categoria?: string;      // ex.: ONG, Universidade, Empresa
  area?: string;           // ex.: Educação, Saúde, Meio Ambiente
  site?: string;
  email?: string;
  telefone?: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  cidade?: string;
  estado?: string;
};

const BASE_URL = 'https://projeto-java-6zhr.onrender.com';

// Ajuste os caminhos conforme sua API
export async function listarOrganizacoes(): Promise<OrganizacaoApi[]> {
  const res = await fetch(`${BASE_URL}/organizacoes`, { headers: { Accept: 'application/json' } });
  if (!res.ok) throw new Error(`Erro ao buscar organizações: ${res.status}`);
  return res.json();
}

export async function obterOrganizacao(id: string | number): Promise<OrganizacaoApi> {
  const res = await fetch(`${BASE_URL}/organizacoes/${id}`, { headers: { Accept: 'application/json' } });
  if (!res.ok) throw new Error(`Erro ao buscar organização: ${res.status}`);
  return res.json();
}
