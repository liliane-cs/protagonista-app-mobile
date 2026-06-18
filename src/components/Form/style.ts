import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles/theme";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.fundo,
  },

  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },

  card: {
    backgroundColor: colors.fundoPrincipal,
    borderRadius: 24,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  tituloContainer: {
    alignItems: "center",
    marginBottom: 36,
  },

  titulo: {
    fontFamily: fonts.title,
    fontWeight: "800",
    fontSize: 40,
    color: colors.rosaEscuro,
    textAlign: "center",
    lineHeight: 50,
  },

  subtitulo: {
    fontFamily: fonts.body,
    fontSize: 17,
    color: colors.textoSecundario,
    textAlign: "center",
    marginTop: 30,
    lineHeight: 22,
  },

  inputContainer: {
    marginTop: 15,
    marginBottom: 18,
  },

  label: {
    fontFamily: fonts.bodyBold,
    fontWeight: "700",
    fontSize: 16,
    color: colors.rosaEscuro,
    marginBottom: 8,
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.bordaSuave,
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 52,
    backgroundColor: colors.fundoPrincipal,
  },

  inputIcon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontFamily: fonts.body,
    fontSize: 15,
    color: colors.texto,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.rosaEscuro,
    borderRadius: 30,
    height: 56,
    width: "100%",
    gap: 8,
    marginTop: 20,
  },

  buttonDisabled: {
    opacity: 0.5,
  },

  buttonText: {
    fontFamily: fonts.bodyBold,
    fontWeight: "700",
    fontSize: 15,
    letterSpacing: 0.3,
    color: colors.textoInvertido,
  },

  caption: {
    fontFamily: fonts.body,
    fontSize: 12,
    color: colors.textoSecundario,
    textAlign: "center",
    letterSpacing: 1,
  },

  linkContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35,
  },

  linkTexto: {
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 20,
    color: colors.textoSecundario,
  },

  linkDestaque: {
    fontFamily: fonts.bodyBold,
    fontWeight: "700",
    fontSize: 17,
    lineHeight: 20,
    color: colors.rosaEscuro,
  },
});