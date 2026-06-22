import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  Alert,
  Image,
  Share,
  ActivityIndicator,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { getOportunidadeById } from "../../services/protagonizaService";
import { Oportunidade } from "../../types/oportunidades";
import { styles } from "./style";
import * as AuthSession from "expo-auth-session";

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

  // Compartilhar oportunidade
  const compartilhar = async () => {
    if (!oportunidade) return;
    try {
      await Share.share({
        message: `Confira esta oportunidade!\n\n${oportunidade.titulo}\n${oportunidade.descricao}\nLocal: ${
          oportunidade.local ?? "Online"
        }\nPublicado em: ${oportunidade.publicadoEm ?? "Data não informada"}`,
      });
    } catch (err) {
      const mensagem = err instanceof Error ? err.message : "Erro desconhecido";
      Alert.alert("Erro", "Não foi possível compartilhar: " + mensagem);
    }
  };

  // Adicionar ao Google Calendar
  const adicionarAoCalendario = async () => {
    if (!oportunidade) return;

    try {
      const redirectUri = AuthSession.makeRedirectUri({ scheme: "protagoniza" });
      console.log("Redirect URI gerado:", redirectUri);

      const result = await AuthSession.startAsync({
        authUrl:
          `https://accounts.google.com/o/oauth2/v2/auth?response_type=token` +
          `&client_id=982215938880-gsk9qvfg5thf7e53co1ic25g4lmpc70u.apps.googleusercontent.com` + 
          `&redirect_uri=https://auth.expo.io/d4vila/protagoniza` +
          `&scope=https://www.googleapis.com/auth/calendar.events`,
      });

      if (result.type === "success" && result.params.access_token) {
        const accessToken = result.params.access_token;

        const startDate = new Date().toISOString();
        const endDate = new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString();

        const response = await fetch(
          "https://www.googleapis.com/calendar/v3/calendars/primary/events",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              summary: oportunidade.titulo,
              description: oportunidade.descricao,
              location: oportunidade.local,
              start: { dateTime: startDate },
              end: { dateTime: endDate },
            }),
          }
        );

        if (response.ok) {
          Alert.alert("Sucesso", "Evento adicionado ao Google Calendar!");
        } else {
          Alert.alert("Erro", "Não foi possível adicionar ao calendário.");
        }
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Falha na integração com o Google Calendar.");
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
          <Button title="Compartilhar" onPress={compartilhar} color="#555" />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Salvar no Calendário"
            onPress={adicionarAoCalendario}
            color="#7a1218"
          />
        </View>
      </View>
    </View>
  );
};
