import { StyleSheet } from "react-native";
import { colors } from "../../styles/theme";

export const styles = StyleSheet.create({
  base: {
    width: "100%",
    maxWidth: 400,
    height: 56,
    borderRadius: 16,
    backgroundColor: colors.vinhoEscuro,
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.vinhoEscuro,
  },
  texto: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textoInvertido,
  },
  textoOutline: {
    color: colors.vinhoEscuro,
  },
});
