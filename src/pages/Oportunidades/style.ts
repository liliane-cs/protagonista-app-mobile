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
    marginBottom: 12,
    color: colors.titulo,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: colors.borda,
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    backgroundColor: colors.fundo,
    color: colors.texto,
    fontFamily: fonts.body,
  },
  filterBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  filterText: {
    fontFamily: fonts.body,
    fontSize: 14,
    color: colors.textoSecundario,
  },
  filterTextAtivo: {
    fontFamily: fonts.bodyBold,
    color: colors.vinhoPrincipal,
  },
  empty: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    fontFamily: fonts.body,
    color: colors.textoSecundario,
  },
});
