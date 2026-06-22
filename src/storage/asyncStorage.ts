import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITOS_KEY = "@protagonista:favoritos";

export async function buscarDadosStorage<T>(chave: string): Promise<T | null> {
  try {
    const dados = await AsyncStorage.getItem(chave);

    if (!dados) {
      return null;
    }

    return JSON.parse(dados) as T;
  } catch (error) {
    console.log("Erro ao buscar dados no storage:", error);
    return null;
  }
}

export async function salvarDadosStorage<T>(
  chave: string,
  dados: T,
): Promise<void> {
  try {
    await AsyncStorage.setItem(chave, JSON.stringify(dados));
  } catch (error) {
    console.log("Erro ao salvar dados no storage:", error);
  }
}

export async function removerDadosStorage(chave: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(chave);
  } catch (error) {
    console.log("Erro ao remover dados do storage:", error);
  }
}

export { FAVORITOS_KEY };