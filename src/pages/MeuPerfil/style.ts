import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({

  // ── TELA DE PERFIL ──────────────────────────────────────────
  screen: {
    flex: 1,
    backgroundColor: "#FDF6F0",
  },

  scroll: {
    paddingBottom: 32,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 56,
    paddingBottom: 16,
  },

  appName: {
    fontFamily: "serif",
    fontSize: 15,
    fontWeight: "700",
    color: "#3B0A1F",
  },

  perfilHero: {
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 24,
  },

  fotoWrapper: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: "#fff",
    overflow: "hidden",
    backgroundColor: "#E8C9D0",
    shadowColor: "#3B0A1F",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
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
    backgroundColor: "#E8C9D0",
  },

  nome: {
    fontFamily: "serif",
    fontSize: 30,
    fontWeight: "700",
    color: "#3B0A1F",
    marginTop: 14,
    marginBottom: 4,
  },

  cargo: {
    fontSize: 15,
    color: "#7A4A5A",
    marginBottom: 4,
    fontWeight: "500",
  },

  cidadeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 30,
  },

  cidadeTexto: {
    fontSize: 13,
    color: "#7A4A5A",
  },

  botaoEditar: {
    backgroundColor: "#6B1A35",
    borderRadius: 30,
    paddingVertical: 13,
    paddingHorizontal: 48,
    marginBottom: 30,
  },

  botaoEditarTexto: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },

  divisorLinha: {
    height: 1,
    backgroundColor: "#E8C9D0",
    marginHorizontal: 24,
  },

  acessosLabel: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2,
    color: "#B07080",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 12,
  },

  itemAcesso: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#F0DDE5",
  },

  itemAcessoEsquerda: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  itemAcessoIconeWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FAE8EF",
    alignItems: "center",
    justifyContent: "center",
  },

  itemAcessoTexto: {
    fontSize: 15,
    color: "#3B0A1F",
    fontWeight: "500",
  },

  // ── TELA DE EDITAR PERFIL ────────────────────────────────────
  editHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 56,
    paddingBottom: 16,
  },

  editHeaderTitulo: {
    fontFamily: "serif",
    fontSize: 18,
    fontWeight: "700",
    color: "#3B0A1F",
  },

  editFotoWrapper: {
    alignItems: "center",
    marginBottom: 8,
  },

  editFotoCirculo: {
    width: 200,
    height: 200,
    borderRadius: 140,
    overflow: "hidden",
    backgroundColor: "#E8C9D0",
    borderWidth: 3,
    borderColor: "#fff",
    shadowColor: "#3B0A1F",
    elevation: 4,
  },

  editFoto: {
    width: "100%",
    height: "100%",
  },

  alterarFotoTexto: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 10,
  },

  alterarFotoLabel: {
    fontSize: 13,
    color: "#6B1A35",
    fontWeight: "500",
  },

  editNome: {
    fontFamily: "serif",
    fontSize: 30,
    fontWeight: "700",
    color: "#3B0A1F",
    textAlign: "center",
    marginTop: 12,
    marginBottom: 2,
  },

  editSubtitulo: {
    fontSize: 15,
    color: "#7A4A5A",
    textAlign: "center",
    marginBottom: 16,
    marginTop: 12,
  },

  botaoExcluir: {
  borderWidth: 1.5,
  borderColor: "#C0392B",
  borderRadius: 30,
  paddingVertical: 13,
  alignItems: "center",
  marginTop: 30, 
},

  botaoExcluirTexto: {
    color: "#C0392B",
    fontSize: 15,
    fontWeight: "600",
    marginTop: 5,
  },
});