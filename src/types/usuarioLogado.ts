export interface UsuarioLogado {
  id: string;
  nome: string;
  email: string;
  senha: string;
  area: string;
  cidade: string;
  descricao?: string;
  contato?: string;
  foto?: string;
}
