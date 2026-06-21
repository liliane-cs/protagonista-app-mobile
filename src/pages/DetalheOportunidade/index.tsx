import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { StackParamList } from "../../routers/navigation";
import { getOportunidadeById } from "../../services/protagonizaService";
import { Oportunidade } from "../../types/oportunidades";
import { styles } from "./style";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/Error";

type DetalheRouteProp = RouteProp<StackParamList, "DetalheOportunidade">;

interface Props {
  route: DetalheRouteProp;
}

export const DetalheOportunidade = ({ route }: Props) => {
  const { id } = route.params;
  const navigation = useNavigation();
  const [oportunidade, setOportunidade] = useState<Oportunidade | null>(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getOportunidadeById(id);
        setOportunidade(data);
      } catch (err) {
        console.error("Erro ao carregar detalhe", err);
        setErro("Não foi possível carregar os detalhes da oportunidade.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading) return <Loading mensagem="Carregando detalhes..." />;
  if (erro) return <ErrorMessage mensagem={erro} />;
  if (!oportunidade) return <ErrorMessage mensagem="Oportunidade não encontrada." />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{oportunidade.titulo}</Text>
      <Text style={styles.description}>{oportunidade.descricao}</Text>

      {/* Campos extras só no detalhe */}
      {oportunidade.tipo && (
        <Text style={styles.meta}>Tipo: {oportunidade.tipo}</Text>
      )}
      {oportunidade.local && (
        <Text style={styles.meta}>Local: {oportunidade.local}</Text>
      )}
      {oportunidade.publicadoEm && (
        <Text style={styles.meta}>Publicado: {oportunidade.publicadoEm}</Text>
      )}

      <Button variante="primario" onPress={() => navigation.goBack()}>
        Voltar
      </Button>

      <Button variante="outline" onPress={() => console.log("Salvar no calendário")}>
        Salvar no calendário
      </Button>
    </View>
  );
};
