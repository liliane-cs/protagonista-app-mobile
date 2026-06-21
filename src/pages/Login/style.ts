import { StyleSheet } from "react-native";
import { darkColors, colors, fonts } from "../../styles/theme";

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkColors.fundo,
  },

  conteudo: {
    flexGrow: 1,
  },

  areaSuperior: {
    height:400,
    position: "relative",
  },

  imagemPessoa: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
  },

  sombraUniforme: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.fundoPrincipal + "25",
    zIndex: 2,
  },

  gradiente: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 290,
    zIndex: 2,
  },

  tituloWrapper: {
  position: "absolute",
  bottom: 5,
  left: 28,
  right: 28,
  zIndex: 3,
},

  tituloNormal: {
    fontFamily: fonts.title,
    fontStyle: "italic",
    fontSize: 35,
    lineHeight: 44,
    letterSpacing: 1.2,
    color: darkColors.texto,
    fontWeight: "700",
  },

  tituloDestaque: {
    color: colors.rosaQueimado,
  },

  subtitulo: {
    marginTop: 4,
    fontFamily: fonts.body,
    fontSize:12,
    color: colors.rosaClaro,
    marginBottom: 16,
  },

  formulario: {
    paddingHorizontal: 28,
    paddingTop: 24,
    paddingBottom: 36,
  },
  campoPadding: {
  marginBottom: 16,
},
});