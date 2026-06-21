import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles/theme";

export const styles = StyleSheet.create({
  cardEvento: {
    backgroundColor: colors.begeEscuro,
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
  },

  topText: {
    color: colors.vinhoEscuro,
    textTransform: "uppercase",
    fontFamily: fonts.body,
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  title: {
    color: colors.texto,
    textTransform: "uppercase",
    fontFamily: fonts.title,
    letterSpacing: 0.5,
  },
  info: {
    color: colors.texto,
    fontFamily: fonts.body,
    marginVertical: 10,
  },
});
