import { StyleSheet } from "react-native";
import { colors, fonts } from "../styles/theme";

export const styles = StyleSheet.create({
  tabBar: {
    height: 65,
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
    height: 35,
    borderRadius: 999,
    width: 35,
  },

  title: {
    fontFamily: fonts.bodyBold,
    marginBottom: 10,
    textTransform: "uppercase",
    color: colors.vinhoEscuro,
    letterSpacing: 0.5,
  },

  containerQrCode: {
    padding: 20,
    backgroundColor: colors.rosaClaro,
    marginTop: "auto",
    alignItems: "center",
  },
});
