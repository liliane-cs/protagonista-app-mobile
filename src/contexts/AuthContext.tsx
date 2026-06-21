import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState, useEffect } from "react";
import { UsuarioLogado } from "../types/usuarioLogado";
import { AuthContextType } from "../types/authTypes";

export const AuthContext = createContext<AuthContextType>({
  usuario: null,
  isLoadingAuth: true,
  salvarSessao: async () => {},
  removerSessao: async () => {},
  atualizarUsuario: () => {},
});

interface PropsProvider {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: PropsProvider) => {
  const [usuario, setUsuario] = useState<UsuarioLogado | null>(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@protagoniza:usuario");

      if (value !== null) {
        setUsuario(JSON.parse(value));
        console.log("Dados coletados com sucesso", value);
      }
    } catch (error) {
      console.log("Erro ao buscar sessão", error);
    } finally {
      setIsLoadingAuth(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const salvarSessao = async (dadosUsuario: UsuarioLogado) => {
    try {
      await AsyncStorage.setItem(
        "@protagoniza:usuario",
        JSON.stringify(dadosUsuario),
      );
      setUsuario(dadosUsuario);
      console.log("Sessão salva com sucesso");
    } catch (error) {
      console.log("Erro ao salvar sessão", error);
    }
  };

  const removerSessao = async () => {
    try {
      await AsyncStorage.removeItem("@protagoniza:usuario");
      setUsuario(null);
      console.log("Sessão removida com sucesso");
    } catch (error) {
      console.log("Erro ao remover sessão", error);
    }
  };

  const atualizarUsuario = (dados: Partial<UsuarioLogado>) => {
    if (!usuario) return;
    const atualizado = { ...usuario, ...dados };
    setUsuario(atualizado);
    AsyncStorage.setItem("@protagoniza:usuario", JSON.stringify(atualizado));
  };

  return (
    <AuthContext.Provider
      value={{
        usuario,
        isLoadingAuth,
        salvarSessao,
        removerSessao,
        atualizarUsuario,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
