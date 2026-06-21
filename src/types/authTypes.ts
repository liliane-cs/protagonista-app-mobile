import { UsuarioLogado } from "./usuarioLogado";

export type AuthContextType = {
  usuario: UsuarioLogado | null;
  isLoadingAuth: boolean;
  salvarSessao: (usuario: UsuarioLogado) => Promise<void>;
  removerSessao: () => Promise<void>;
  atualizarUsuario: (dados: Partial<UsuarioLogado>) => void;
};
