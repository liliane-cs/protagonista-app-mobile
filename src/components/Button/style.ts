import { StyleSheet } from "react-native";

export const cores = {
  rosaEscuro: "#C2185B",
  textoInvertido: "#FFFFFF",
};

export const styles = StyleSheet.create({
  base: {
    width: "100%",
    height: 56,
    borderRadius: 16,
    backgroundColor: cores.rosaEscuro,
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: cores.rosaEscuro,
  },
  texto: {
    fontSize: 16,
    fontWeight: "600",
    color: cores.textoInvertido,
  },
  textoOutline: {
    color: cores.rosaEscuro,
  },
});
