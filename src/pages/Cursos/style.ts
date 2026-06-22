import { StyleSheet } from "react-native";

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
    color: "#333",
    fontSize: 28,
    fontWeight: "bold",
  },

  filtroContainer: {
    width: "90%",
    borderWidth: 2,
    borderColor: "#d9d9d9",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
  },

  lista: {
    paddingBottom: 20,
  },

  row: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 16,
  },
});