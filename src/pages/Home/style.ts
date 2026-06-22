import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles/theme";

export const styles = StyleSheet.create({
  buttonText: {
    color: colors.textoInvertido,
    fontWeight: "bold",
  },

  accountIcon: {
    position: "absolute",
    right: 0,
    top: 12,
    flexDirection: "row",
  },

  home: {
    fontFamily: fonts.body,
    padding: 20,
    color: colors.texto,
    backgroundColor: colors.fundo,
  },

  saudacao: {
    fontFamily: fonts.bodyBold,
    fontSize: 20,
    marginBottom: 10,
  },

  banner: {
    width: "100%",
    height: 110,
    borderRadius: 10,
    marginVertical: 15,
  },

  iconesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },

  titleHome: {
    fontFamily: fonts.bodyBold,
    letterSpacing: 0.5,
    marginVertical: 10,
  },

  headerLivros: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
  },

  addButton: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: colors.vinhoMedio,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: colors.rosaQueimado,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 4,
  },

  addButtonText: {
    color: colors.textoInvertido,
  },

  bookCard: {
    backgroundColor: colors.fundoPrincipal,
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: colors.texto,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
  },

  bookImage: {
    width: 120,
    height: 180,
    borderRadius: 12,
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 4,
  },

  bookAuthor: {
    fontSize: 12,
    textAlign: "center",
  },

  input: {
    backgroundColor: "transparent",
    borderRadius: 12,
    padding: 14,
    marginTop: 14,
    marginBottom: 12,
    fontSize: 14,
    borderWidth: 1,
    borderColor: colors.begeEscuro,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-end",
  },

  bottomSheet: {
    backgroundColor: colors.fundoPrincipal,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
