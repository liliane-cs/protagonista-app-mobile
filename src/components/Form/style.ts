import { StyleSheet } from "react-native";
import { colors, darkColors, fonts } from "../../styles/theme";

export const cores = {
  icone: colors.vinhoPrincipal,
  placeholder: colors.begeEscuro,
};

export const estilos = StyleSheet.create({
  titulo: {
    fontFamily: fonts.title,
    fontStyle: "italic",
    fontSize: 38,
    lineHeight: 40,
    letterSpacing: 1.2,
    color: darkColors.texto,
    fontWeight: "700",
  },

  subtitulo: {
    marginTop: 2,
    fontFamily: fonts.body,
    fontSize: 13,
    color: colors.rosaClaro,
    fontStyle: "italic",
  },
  
  campo: {
    marginBottom: 5,
  },

  label: {
    fontFamily: fonts.bodyBold,
    fontSize: 12,
    fontWeight: "700",
    color: colors.vinhoEscuro,
    marginBottom: 8,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    borderWidth: 2,
    borderColor: colors.bordaSuave,
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.fundoPrincipal,
    height: 44,
  },

  input: {
    flex: 1,
    fontFamily: fonts.body,
    color: colors.texto,
    fontSize: 13,
  },

  link: {
    fontFamily: fonts.body,
    color: "rgba(255,255,255,0.7)",
    fontSize: 12,
    marginBottom: 20,
  },

  botao: {
    height: 45,
    borderRadius: 21,
    backgroundColor: colors.vinhoPrincipal,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
    marginTop: 3,
  },

  botaoDesabilitado: {
    opacity: 0.6,
  },

  textoBotao: {
    fontFamily: fonts.bodyBold,
    color: colors.textoInvertido,
    fontSize: 15,
    letterSpacing: 1.5,
    fontWeight: "700",
  },

  divisor: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  linhaDivisor: {
    flex: 1,
    height: 1,
    backgroundColor: darkColors.bordaSuave,
  },

  textoDivisor: {
    marginHorizontal: 12,
    fontFamily: fonts.body,
    color: "rgba(255,255,255,0.5)",
    fontSize: 12,
  },

  iconesSociais: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 20,
  },

  iconeSocial: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.begeEscuro,
    alignItems: "center",
    justifyContent: "center",
  },

  linhaRodape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

  },

  textoRodape: {
    fontFamily: fonts.body,
    color: darkColors.borda,
    fontSize: 12,
  },

  linkRodape: {
    fontFamily: fonts.bodyBold,
    color: colors.rosaQueimado,
    fontSize: 15,
    fontWeight: "700",
   
  },

});