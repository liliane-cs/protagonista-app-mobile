import { StyleSheet } from "react-native";
import { colors } from "../../styles/theme";

export const estilos = StyleSheet.create({

  // ── TELA DE PERFIL ──────────────────────────────────────────
  screen: {
    flex: 1,
    backgroundColor: colors.fundo,
  },

  screenEditar: {
    flex: 1,
    backgroundColor: colors.vinhoEscuro,
  },

  scroll: {
    paddingBottom: 48,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 70,
    paddingBottom: 8,
    backgroundColor: colors.vinhoEscuro,
  },

  appName: {
    fontFamily: "serif",
    fontSize: 14,
    fontWeight: "700",
    color: colors.textoInvertido,
    letterSpacing: 1,
  },

  perfilHero: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 30,
    backgroundColor: colors.vinhoEscuro,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 240,
  },

  fotoWrapper: {
    width: 150,
    height: 150,
    borderRadius: 65,
    borderWidth: 3,
    borderColor: colors.rosaQueimado,
    overflow: "hidden",
    backgroundColor: colors.rosaClaro,
   
  },

  foto: {
    width: "100%",
    height: "100%",
  },

  fotoPlaceholder: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.rosaClaro,
  },

  nome: {
    fontFamily: "serif",
    fontStyle: "italic",
    fontSize:26,
    fontWeight: "700",
    color: colors.textoInvertido,
    marginTop: 5,
    marginBottom: 0,
  },

  cargo: {
    fontSize: 10,
    color: colors.rosaQueimado,
    marginBottom: 5,
    fontWeight: "700",
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },

  cidadeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  cidadeTexto: {
    fontSize: 9,
    color: colors.rosaClaro,
  },

  botaoEditarFlutuante: {
    position: "absolute",
    right: 28,
    bottom: -5,
    width:60,
    height: 60,
    borderRadius: 28,
    backgroundColor: colors.vinhoPrincipal,
    alignItems: "center",
    justifyContent: "center",
    
  },

  botaoEditarLabel: {
    position: "absolute",
    right: 22,
    bottom: -29,
    fontSize: 12,
    fontWeight: "900",
    color: colors.rosaQueimado,
  },

  botaoEditar: {
    backgroundColor: colors.vinhoPrincipal,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },

  botaoEditarTexto: {
    color: colors.textoInvertido,
    fontSize: 15,
    fontWeight: "600",
  },

  acessosLabel: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 2,
    color: colors.vinhoMedio,
    textAlign: "left",
    marginTop: 36,
    marginBottom: 15,
    marginLeft: 20,
  },

  itemAcesso: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginHorizontal: 20,
    marginBottom: 12,
    backgroundColor: colors.fundoPrincipal,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },

  itemAcessoEsquerda: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  itemAcessoIconeWrapper: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.vinhoPrincipal,
    alignItems: "center",
    justifyContent: "center",
  },

  itemAcessoTexto: {
    fontSize: 15,
    color: colors.vinhoEscuro,
    fontWeight: "600",
  },

  // ── TELA DE EDITAR PERFIL ──────────────────────────────────────────

  editHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: colors.vinhoEscuro,
  },

  editHeaderTitulo: {
    fontFamily: "serif",
    fontSize: 20,
    fontWeight: "700",
    color: colors.textoInvertido,
  },

  editFotoWrapper: {
    alignItems: "center",
    backgroundColor: colors.vinhoEscuro,
    paddingTop: 8,
    paddingBottom: 32,
    position: "relative",
  },

  editFotoCirculo: {
    width: 380,
    height: 180,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: colors.rosaClaro,
    borderWidth: 3,
    borderColor: colors.rosaQueimado,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },

  editFoto: {
    width: "100%",
    height: "100%",
  },

  alterarFotoTexto: {
    position: "absolute",
    bottom: 20,
    right: "50%",
    marginRight: -56,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.vinhoPrincipal,
    borderWidth: 2,
    borderColor: colors.textoInvertido,
    alignItems: "center",
    justifyContent: "center",
   
  },

  alterarFotoLabel: {
    display: "none",
  },

  editNome: {
    display: "none",
  },

  editSubtitulo: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.5,
    color: colors.rosaQueimado,
    textTransform: "uppercase",
    marginTop: 24,
    marginBottom: 6,
    marginLeft: 0,
  },

  camposWrapper: {
    marginHorizontal: 20,
    marginTop: 24,
    gap: 16,
  },

  editLabel: {
    color: "#E8C9D0",

  },

  editInput: {
    height: 65,
    borderWidth: 3,
    borderColor: colors.bordaSuave,
    backgroundColor: colors.fundoPrincipal,
  },

  editBotaoSalvar: {
  backgroundColor: "transparent",
  borderRadius: 20,
  height: 52,
  borderWidth: 2,
  borderColor: "#E8C9D0",
  
},

editBotaoSalvarTexto: {
  fontSize: 15,
  letterSpacing: 1,
  color: "#fff",
  fontWeight: "900",
},

botaoExcluir: {
  borderWidth: 0,
  borderRadius: 30,
  paddingVertical: 14,
  alignItems: "center",
  marginTop: 15,
  marginBottom: 48,
  backgroundColor: colors.fundoPrincipal,
 
},

botaoExcluirTexto: {
  color: colors.vinhoEscuro,
  fontSize: 15,
  fontWeight: "700",
},
});