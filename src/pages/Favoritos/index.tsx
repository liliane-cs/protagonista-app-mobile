import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { FavoritesContext } from "../../contexts/FavoritesContext";
import { Card } from "../../components/Card";
import { styles } from "./style";

export default function Favoritos() {
  const {
    favoritos,
    carregandoFavoritos,
    removerFavorito,
  } = useContext(FavoritesContext);

  if (carregandoFavoritos) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (favoritos.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.emptyText}>
          Nenhum favorito salvo ainda 💔
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favoritos}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <Card
          titulo={item.titulo}
          descricao={item.descricao}
          imagem={item.imagem}
          favoritado={true}
          aoFavoritar={() => removerFavorito(item.id)}
        />
      )}
    />
  );
}