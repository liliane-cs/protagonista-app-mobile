import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.fundoPrincipal,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.title,
    marginBottom: 12,
    color: colors.titulo,
  },
  description: {
    fontSize: 16,
    fontFamily: fonts.body,
    color: colors.textoSecundario,
    marginBottom: 16,
  },
  meta: {
    fontSize: 14,
    fontFamily: fonts.body,
    color: colors.textoSecundario,
    marginBottom: 8,
  },
});
