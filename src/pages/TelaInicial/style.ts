import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles/theme";

export const styles = StyleSheet.create({
  startContainer: {
    boxShadow: "box-sizing",
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },

  title: {
    fontSize: 44,
    fontWeight: 200,
    marginVertical: 10,
    fontFamily: fonts.titleRegular,
    color: colors.textoInvertido,
    marginLeft: 20,
  },
  text: {
    color: colors.textoInvertido,
    fontFamily: fonts.body,
    marginLeft: 20,
    width: 200,
    fontSize: 18,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    padding: 20,
    maxWidth: 400,
  },

  button: {
    backgroundColor: colors.vinhoPrincipal,
    width: "50%",
    height: 40,
    borderRadius: 999,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSecondary: {
    backgroundColor: colors.bege,
    color: colors.vinhoPrincipal,
  },
  buttonText: {
    color: colors.textoInvertido,
    fontWeight: "bold",
  },
  buttonSecondaryText: {
    color: colors.vinhoPrincipal,
    fontWeight: "bold",
  },

  secondaryButton: {
    marginTop: 10,
    width: "100%",
    maxWidth: 400,
  },
  secondaryText: {
    color: colors.textoInvertido,
    textAlign: "center",
  },

  bottomContainer: {
    position: "absolute",
    bottom: 70,
    width: "100%",
  },
});
