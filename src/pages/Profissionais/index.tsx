import React, { useState, useEffect, useMemo, useCallback, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { getProfissionais } from "../../services/protagonizaService";
import { Profissional } from "../../types/profissional";
import { colors, fonts } from "../../styles/theme";
import { makeStyles } from "./style";
import { filtroSchema } from "../../schema";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { Card } from "../../components/Card";

export const Profissionais: React.FC = () => {
  const navigation = useNavigation();
  const styles = makeStyles(colors, fonts);
  const { adicionarFavorito, estaFavoritado } = useContext(FavoritesContext);

  const [profissionais, setProfissionais] = useState<Profissional[]>([]);
  const [busca, setBusca] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [erro, setErro] = useState<boolean>(false);

  const carregarProfissionais = useCallback(async (isRefresh = false) => {
    if (isRefresh) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }

    try {
      setErro(false);
      const dados = await getProfissionais();
      setProfissionais(dados);
    } catch {
      setErro(true);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    carregarProfissionais();
  }, [carregarProfissionais]);

  const profissionaisFiltrados = useMemo(() => {
    const resultadoValidacao = filtroSchema.safeParse({ termo: busca });

    if (!resultadoValidacao.success || !resultadoValidacao.data.termo) {
      return profissionais;
    }

    const termoValidado = resultadoValidacao.data.termo;

    return profissionais.filter(
      (p) =>
        p.nome.toLowerCase().includes(termoValidado) ||
        p.area.toLowerCase().includes(termoValidado) ||
        p.cidade.toLowerCase().includes(termoValidado),
    );
  }, [busca, profissionais]);

  function renderItem({ item }: { item: Profissional }) {
    const idFavorito = `profissional-${item.id}`;

    return (
      <Card
        titulo={item.nome}
        descricao={`${item.area} • ${item.cidade}`}
        imagem={item.foto ?? ""}
        favoritado={estaFavoritado(idFavorito)}
        aoFavoritar={() =>
          adicionarFavorito({
            id: idFavorito,
            titulo: item.nome,
            descricao: `${item.area} • ${item.cidade}`,
            imagem: item.foto ?? "",
            tipo: "profissional",
          })
        }
        onPress={() =>
          navigation.navigate("ProfissionalDetalhe", { id: String(item.id) })
        }
      />
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="arrow-back" size={22} color={colors.texto} />
          </TouchableOpacity>

          <Text style={styles.title}>Profissionais</Text>

          <TouchableOpacity style={styles.filterButton}>
            <MaterialIcons name="filter-list" size={18} color={colors.titulo} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchBar}>
          <MaterialIcons name="search" size={18} color={colors.borda} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar profissionais..."
            placeholderTextColor={colors.textoSecundario}
            value={busca}
            onChangeText={setBusca}
          />
        </View>

        {loading ? (
          <View style={styles.centered}>
            <ActivityIndicator size="large" color={colors.vinhoPrincipal} />
          </View>
        ) : erro ? (
          <View style={styles.centered}>
            <MaterialIcons
              name="error-outline"
              size={40}
              color={colors.vinhoPrincipal}
            />
            <Text style={styles.errorText}>
              Não foi possível carregar os profissionais
            </Text>
          </View>
        ) : profissionaisFiltrados.length === 0 ? (
          <View style={styles.centered}>
            <MaterialIcons
              name="search-off"
              size={40}
              color={colors.textoSecundario}
            />
            <Text style={styles.emptyText}>Nenhum profissional encontrado</Text>
          </View>
        ) : (
          <FlatList
            data={profissionaisFiltrados}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderItem}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
            refreshing={refreshing}
            onRefresh={() => carregarProfissionais(true)}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Profissionais;