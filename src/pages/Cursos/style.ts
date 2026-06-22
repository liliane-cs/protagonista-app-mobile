import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  cabecalho: {
    alignItems: "center",
    marginBottom: 16,
    gap: 12,
  },

  titulo: {
    textAlign: "center",
    color: colors.vinhoEscuro,
    fontSize: 24,
    marginTop: 20,
    fontFamily: fonts.title,
  },

  filtroContainer: {
    width: "80%",
    borderWidth: 2,
    borderColor: colors.begeEscuro,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
  },

  lista: {
    paddingBottom: 20,
  },

  row: {
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 16,
    alignItems: "center",
  },
});
