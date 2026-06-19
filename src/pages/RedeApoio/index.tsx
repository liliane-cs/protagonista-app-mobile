
import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
  Alert,
  Linking
} from "react-native";
import { getApoio } from "../../services/protagonizaService";
import { Apoio } from "../../types/apoios";
import { colors } from "../../styles/theme";
import { styles } from "./style";

export default function RedeDeApoio() {
  const [apoios, setApoios] = useState<Apoio[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [expandidos, setExpandidos] = useState<number[]>([]);

  const buscarApoio = async () => {
    try {
      const dados = await getApoio();
      setApoios(Array.isArray(dados) ? dados : []);
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao buscar a rede de apoio.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    buscarApoio();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    buscarApoio();
  }, []);

  const toggleDetalhes = (id: number) => {
    setExpandidos((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={colors.roxo} />
      </View>
    );
  }

  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Nenhum dado encontrado na rede de apoio.</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rede de Apoio</Text>

      <FlatList
        data={apoios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.nome || "Sem título"}</Text>
            <Text style={styles.cardText}>
              <Text style={styles.bold}>Tipo: </Text>
              {item.tipo}
            </Text>

            {expandidos.includes(item.id) && (
              <View style={styles.detailsContainer}>
                <Text style={styles.cardText}>
                  <Text style={styles.bold}>Descrição: </Text>
                  {item.descricao}
                </Text>
                <Text style={styles.cardText}>
                  <Text style={styles.bold}>Contato: </Text>
                  {item.contato}
                </Text>
                {!!item.link && (
                  <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
                    <Text style={styles.linkText}>Acessar Link</Text>
                  </TouchableOpacity>
                )}
              </View>
            )}

            <TouchableOpacity
              style={styles.button}
              onPress={() => toggleDetalhes(item.id)}
            >
              <Text style={styles.buttonText}>
                {expandidos.includes(item.id) ? "Esconder Detalhes" : "Mostrar Detalhes"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={renderEmptyState}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[colors.roxo]}
          />
        }
        contentContainerStyle={apoios.length === 0 ? styles.flatListEmpty : undefined}
      />
    </View>
  );
}