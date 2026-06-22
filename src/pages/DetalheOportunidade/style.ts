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
    textTransform: "uppercase",
  },
  description: {
    fontSize: 16,
    fontFamily: fonts.body,
    color: colors.textoSecundario,
    marginBottom: 16,
    lineHeight: 22,
  },
  meta: {
    fontSize: 14,
    fontFamily: fonts.body,
    color: colors.textoSecundario,
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
});
