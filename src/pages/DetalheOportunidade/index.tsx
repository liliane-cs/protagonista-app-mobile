import React, { useEffect, useState } from "react";
import { View, Text, Button, Alert, Image, Share, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
import { getOportunidadeById } from "../../services/protagonizaService";
import { Oportunidade } from "../../types/oportunidades";
import { styles } from "./style";

export const DetalheOportunidade = () => {
  const route = useRoute();
  const { id } = route.params as { id: string };

  const [oportunidade, setOportunidade] = useState<Oportunidade | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getOportunidadeById(id);
        setOportunidade(data);
      } catch {
        Alert.alert("Erro", "Não foi possível carregar a oportunidade.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  const compartilhar = async () => {
    if (!oportunidade) return;
    try {
      await Share.share({
        message: `Confira esta oportunidade!\n\n${oportunidade.titulo}\n${oportunidade.descricao}\nLocal: ${oportunidade.local ?? "Online"}\nPublicado em: ${oportunidade.publicadoEm ?? "Data não informada"}`,
      });
    } catch (err) {
      const mensagem = err instanceof Error ? err.message : "Erro desconhecido";
      Alert.alert("Erro", "Não foi possível compartilhar: " + mensagem);
    }
  };

  if (loading) return <ActivityIndicator size="large" color="#7a1218" />;
  if (!oportunidade) return <Text>Nenhuma oportunidade encontrada.</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{oportunidade.titulo}</Text>
      <Text style={styles.description}>{oportunidade.descricao}</Text>

      {oportunidade.imagem && (
        <Image
          source={{ uri: oportunidade.imagem }}
          style={styles.image}
          resizeMode="cover"
        />
      )}

      {oportunidade.tipo && (
        <Text style={styles.meta}>Tipo: {oportunidade.tipo}</Text>
      )}
      {oportunidade.local && (
        <Text style={styles.meta}>Local: {oportunidade.local}</Text>
      )}
      {oportunidade.publicadoEm && (
        <Text style={styles.meta}>Publicado em: {oportunidade.publicadoEm}</Text>
      )}

      <View style={styles.buttonRow}>
        <View style={styles.buttonWrapper}>
          <Button
            title="Compartilhar"
            onPress={compartilhar}
            color="#555"
          />
        </View>
      </View>
    </View>
  );
};
