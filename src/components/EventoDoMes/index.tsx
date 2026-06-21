import { View, Text, TouchableOpacity, Linking } from "react-native";
import { EventoDoMesProps } from "./type";
import Button from "../Button";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./style";
import { colors } from "../../styles/theme";

export function EventoDoMes({ evento }: EventoDoMesProps) {
  const formatDate = (date: Date): string => {
    return date.toISOString().replace(/[-:]|\.\d{3}/g, "");
  };

  const adicionarAoCalendar = () => {
    const startDate = new Date(evento.data);
    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000);

    const url =
      "https://www.google.com/calendar/render?action=TEMPLATE" +
      `&text=${encodeURIComponent(evento.titulo)}` +
      `&dates=${formatDate(startDate)}/${formatDate(endDate)}` +
      `&details=${encodeURIComponent(evento.descricao)}` +
      `&location=${encodeURIComponent(evento.local)}`;

    Linking.openURL(url);
  };

  return (
    <View style={styles.cardEvento}>
      <Text style={styles.topText}>Evento do Mês</Text>

      <Text style={styles.title}>{evento.titulo}</Text>

      <Text>{evento.local}</Text>
      <Text style={styles.info}>
        <Ionicons name="time-outline" size={15} />
        {new Date(evento.data).toLocaleString()}
      </Text>

      <Button onPress={adicionarAoCalendar}>
        <Ionicons
          name="add-circle-outline"
          size={20}
          color={colors.textoInvertido}
        />
        <Text style={{ color: colors.textoInvertido }}>
          Adicionar ao Calendario
        </Text>
      </Button>
    </View>
  );
}
