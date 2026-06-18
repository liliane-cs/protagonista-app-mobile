import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    zIndex: 999,
    padding: 24,
  },
  animacao: {
    width: 160,
    height: 160,
  },
  mensagem: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 16,
    color: "#333",
  },
});