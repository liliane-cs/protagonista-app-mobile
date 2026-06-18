import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles/theme";

export const styles = StyleSheet.create({
  // Título
  tituloContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  titulo: {
    fontFamily: fonts.title,
    fontSize: 28,
    color: colors.titulo,
    textAlign: "center",
  },
  subtitulo: {
    fontFamily: fonts.body,
    fontSize: 14,
    color: colors.textoSecundario,
    textAlign: "center",
    marginTop: 8,
  },

  // Input
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontFamily: fonts.bodyBold,
    fontSize: 13,
    color: colors.titulo,
    marginBottom: 6,
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

  // Botão
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.rosaEscuro,
    borderRadius: 30,
    height: 56,
    gap: 8,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontFamily: fonts.bodyBold,
    fontSize: 16,
    color: colors.textoInvertido,
  },

  // Textos pequenos / links (footer, divisores, termos)
  caption: {
    fontFamily: fonts.body,
    fontSize: 12,
    color: colors.textoSecundario,
    textAlign: "center",
    letterSpacing: 1,
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  linkTexto: {
    fontFamily: fonts.body,
    fontSize: 13,
    color: colors.textoSecundario,
  },
  linkDestaque: {
    fontFamily: fonts.bodyBold,
    fontSize: 13,
    color: colors.rosaEscuro,
  },
});