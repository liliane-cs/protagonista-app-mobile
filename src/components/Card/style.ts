import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    maxWidth: 350,
    backgroundColor: colors.fundoPrincipal,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 16,
    shadowColor: colors.roxo,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },

  imagem: {
    width: "100%",
    height: 220,
  },

  conteudo: {
    padding: 16,
  },

  titulo: {
    fontSize: 20,
    color: colors.titulo,
    fontFamily: fonts.title,
    marginBottom: 8,
  },

  descricao: {
    fontSize: 14,
    color: colors.textoSecundario,
  },

  botaoFavoritar: {
    position: "absolute",
    top: 12,
    right: 12,
  },

  coracao: {
    fontSize: 24,
    color: "#999",
  },

  coracaoAtivo: {
    color: colors.rosaEscuro,
  },
});
