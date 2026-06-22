import React, { useEffect, useState, useCallback, useContext } from "react";
import { View, Text, TextInput, FlatList, RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../routers/navigation";
import { getOportunidade } from "../../services/protagonizaService";
import { Oportunidade } from "../../types/oportunidades";
import { styles } from "./style";
import { Card } from "../../components/Card";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/Error";
import { FavoritesContext } from "../../contexts/FavoritesContext";

type NavigationProp = NativeStackNavigationProp<StackParamList>;

export const Oportunidades = () => {
  const navigation = useNavigation<NavigationProp>();
  const { adicionarFavorito, estaFavoritado } = useContext(FavoritesContext);

  const [busca, setBusca] = useState("");
  const [oportunidades, setOportunidades] = useState<Oportunidade[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      const data = await getOportunidade();
      setOportunidades(data);
      setErro(null);
    } catch (err) {
      console.error("Erro ao carregar oportunidades", err);
      setErro("Não foi possível carregar as oportunidades.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
  }, []);

  const filtradas = oportunidades.filter((item) => {
    const tituloNormalizado = item.titulo
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

    const buscaNormalizada = busca
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

    return tituloNormalizado.includes(buscaNormalizada);
  });

  if (loading) return <Loading mensagem="Carregando oportunidades..." />;
  if (erro) return <ErrorMessage mensagem={erro} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oportunidades</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Buscar oportunidade..."
        value={busca}
        onChangeText={setBusca}
      />

      {filtradas.length > 0 ? (
        <FlatList
          data={filtradas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            const idFavorito = `oportunidade-${item.id}`;

            return (
              <Card
                titulo={item.titulo}
                descricao={item.descricao}
                imagem={item.imagem}
                favoritado={estaFavoritado(idFavorito)}
                aoFavoritar={() =>
                  adicionarFavorito({
                    id: idFavorito,
                    titulo: item.titulo,
                    descricao: item.descricao,
                    imagem: item.imagem ?? "",
                    tipo: "oportunidade",
                  })
                }
                onPress={() =>
                  navigation.navigate("OportunidadeDetalhe", {
                    id: String(item.id),
                  })
                }
              />
            );
          }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      ) : (
        <Text style={styles.empty}>Nenhuma oportunidade encontrada.</Text>
      )}
    </View>
  );
};