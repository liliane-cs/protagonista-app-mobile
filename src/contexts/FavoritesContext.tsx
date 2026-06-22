import { createContext, ReactNode, useEffect, useState } from "react";
import {
  buscarDadosStorage,
  FAVORITOS_KEY,
  salvarDadosStorage,
} from "../storage/asyncStorage";

export type TipoFavorito = "curso" | "oportunidade" | "profissional";

export interface Favorito {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
  tipo: TipoFavorito;
}

interface FavoritosContextData {
  favoritos: Favorito[];
  carregandoFavoritos: boolean;
  adicionarFavorito: (favorito: Favorito) => Promise<void>;
  removerFavorito: (id: string) => Promise<void>;
  estaFavoritado: (id: string) => boolean;
}

interface FavoritosProviderProps {
  children: ReactNode;
}

export const FavoritosContext = createContext({} as FavoritosContextData);

export function FavoritosProvider({ children }: FavoritosProviderProps) {
  const [favoritos, setFavoritos] = useState<Favorito[]>([]);
  const [carregandoFavoritos, setCarregandoFavoritos] = useState(true);

  async function carregarFavoritos() {
    try {
      const favoritosSalvos =
        await buscarDadosStorage<Favorito[]>(FAVORITOS_KEY);

      if (favoritosSalvos) {
        setFavoritos(favoritosSalvos);
      }
    } catch (error) {
      console.log("Erro ao carregar favoritos:", error);
    } finally {
      setCarregandoFavoritos(false);
    }
  }

  async function salvarFavoritos(novosFavoritos: Favorito[]) {
    try {
      await salvarDadosStorage(FAVORITOS_KEY, novosFavoritos);
      setFavoritos(novosFavoritos);
    } catch (error) {
      console.log("Erro ao salvar favoritos:", error);
    }
  }

  async function adicionarFavorito(favorito: Favorito) {
    const jaExiste = favoritos.some((item) => item.id === favorito.id);

    if (jaExiste) {
      await removerFavorito(favorito.id);
      return;
    }

    const novosFavoritos = [...favoritos, favorito];
    await salvarFavoritos(novosFavoritos);
  }

  async function removerFavorito(id: string) {
    const favoritosAtualizados = favoritos.filter((item) => item.id !== id);
    await salvarFavoritos(favoritosAtualizados);
  }

  function estaFavoritado(id: string) {
    return favoritos.some((item) => item.id === id);
  }

  useEffect(() => {
    carregarFavoritos();
  }, []);

  return (
    <FavoritosContext.Provider
      value={{
        favoritos,
        carregandoFavoritos,
        adicionarFavorito,
        removerFavorito,
        estaFavoritado,
      }}
    >
      {children}
    </FavoritosContext.Provider>
  );
}