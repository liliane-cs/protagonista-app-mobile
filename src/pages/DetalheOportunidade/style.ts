import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.fundoPrincipal,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.title,
    color: colors.titulo,
    marginBottom: 12,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    fontFamily: fonts.body,
    color: colors.texto,
    marginBottom: 16,
    textAlign: "justify",
    lineHeight: 22,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.bordaSuave,
  },
  meta: {
    fontSize: 14,
    fontFamily: fonts.body,
    color: colors.textoSecundario,
    marginBottom: 6,
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
