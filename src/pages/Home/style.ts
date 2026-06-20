import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles/theme";

export const styles = StyleSheet.create({
  startContainer: {
    boxShadow: "box-sizing",
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },

  title: {
    fontSize: 44,
    fontWeight: 200,
    marginVertical: 10,
    fontFamily: fonts.titleRegular,
    color: colors.textoInvertido,
    marginLeft: 20,
  },
  text: {
    color: colors.textoInvertido,
    fontFamily: fonts.body,
    marginLeft: 20,
    width: 200,
    fontSize: 18,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    padding: 20,
    maxWidth: 400,
  },

  button: {
    backgroundColor: colors.vinhoPrincipal,
    width: "50%",
    height: 40,
    borderRadius: 999,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSecondary: {
    backgroundColor: colors.bege,
    color: colors.vinhoPrincipal,
  },
  buttonText: {
    color: colors.textoInvertido,
    fontWeight: "bold",
  },
  buttonSecondaryText: {
    color: colors.vinhoPrincipal,
    fontWeight: "bold",
  },

  secondaryButton: {
    marginTop: 10,
    width: "100%",
    maxWidth: 400,
  },
  secondaryText: {
    color: colors.textoInvertido,
    textAlign: "center",
  },

  bottomContainer: {
    position: "absolute",
    bottom: 70,
    width: "100%",
  },

  // Home

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
    // width: 310,
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
