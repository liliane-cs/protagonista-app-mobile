import { StyleSheet } from "react-native";
import { colors } from "../styles/theme";

export const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    paddingBottom: 8,
    paddingTop: 8,
    backgroundColor: colors.fundoPrincipal,
    borderTopWidth: 0,
    elevation: 10,
    shadowColor: colors.texto,
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },

  label: {
    fontSize: 12,
    color: colors.vinhoEscuro,
  },

  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    borderRadius: 999,
    width: 30,
  },
});
