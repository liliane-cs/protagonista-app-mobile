import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: colors.fundo,
    padding: 20,
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontFamily: fonts.title,
    color: colors.titulo,
    marginBottom: 12,
    textAlign: "center",
  },

  description: {
    fontSize: 16,
    fontFamily: fonts.body,
    color: colors.texto,
    marginBottom: 20,
    textAlign: "justify",
    lineHeight: 22,
    maxWidth: 400,
  },

  image: {
    width: "100%",
    maxWidth: 400,
    height: 220,
    borderRadius: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.bordaSuave,
  },

  meta: {
    fontSize: 14,
    fontFamily: fonts.body,
    color: colors.textoSecundario,
    marginBottom: 6,
    textAlign: "center",
  },

  buttonRow: {
    width: "100%",
    maxWidth: 400,
    marginTop: 24,
    gap: 12,
  },
});
