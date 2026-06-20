import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";

import { styles } from "./style";
import { CardProps } from "./types";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../styles/theme";

export function Card({
  titulo,
  descricao,
  imagem,
  favoritado,
  aoFavoritar,
  onPress,
}: CardProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} disabled={!onPress}>
        {imagem && (
          <Image
            source={{ uri: imagem }}
            style={styles.imagem}
            resizeMode="cover"
          />
        )}

        <View style={styles.conteudo}>
          <Text style={styles.titulo}>{titulo}</Text>
          <Text style={styles.descricao}>{descricao}</Text>
        </View>

        <TouchableOpacity style={styles.botaoFavoritar} onPress={aoFavoritar}>
          <Ionicons
            name={favoritado ? "heart" : "heart-outline"}
            size={24}
            color={favoritado ? colors.vinhoEscuro : "#999"}
          />
        </TouchableOpacity>
      </Pressable>
    </View>
  );
}
