import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.fundo,
    padding: 16,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.fundo,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.title,
    color: colors.titulo,
    textAlign: "center",
    marginBottom: 16,
  },
  card: {
    backgroundColor: colors.fundoPrincipal,
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.bordaSuave,
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: fonts.titleRegular,
    color: colors.roxo,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    fontFamily: fonts.body,
    color: colors.texto,
    marginBottom: 4,
  },
  bold: {
    fontFamily: fonts.bodyBold,
  },
  detailsContainer: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderColor: colors.bordaSuave,
  },
  linkText: {
    color: colors.vinhoMedio,
    marginTop: 4,
    fontFamily: fonts.bodyBold,
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: colors.roxo,
    padding: 10,
    borderRadius: 4,
    marginTop: 12,
    alignItems: "center",
  },
  buttonText: {
    color: colors.textoInvertido,
    fontFamily: fonts.bodyBold,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    fontFamily: fonts.body,
    color: colors.textoSecundario,
    textAlign: "center",
  },
  flatListEmpty: {
    flexGrow: 1,
  },
});