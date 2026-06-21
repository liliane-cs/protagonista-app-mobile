import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles/theme";

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.vinhoEscuro,
  },

  scroll: {
    flexGrow: 1,
    paddingBottom: 10,
  },

  header: {
    alignItems: "center",
    paddingTop: 70,
    paddingHorizontal: 10,
    paddingBottom: 45,
  },
  
  areaClara: {
  backgroundColor: colors.fundo,
  marginLeft: 50,
  borderTopLeftRadius: 100,
  borderBottomLeftRadius: 100,
  paddingTop: 30,
  paddingHorizontal: 35,
  paddingBottom: 5,
  flexGrow: 1,
},

  formulario: {
    gap: 8,
  },

  botao: {
    marginTop: 10,
    marginBottom: 0,
    height: 44,
    borderRadius: 15,
    backgroundColor: colors.vinhoEscuro,

    justifyContent: "center",
    alignItems: "center",

  },

  textoBotao: {
    color: colors.textoInvertido,
    fontFamily: fonts.title,
    fontSize: 14,
  },

  footer: {
    alignItems: "center",
    marginTop: 0,
  },
});