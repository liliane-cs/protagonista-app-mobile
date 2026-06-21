import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    width: 80,
  },

  label: {
    fontFamily: fonts.body,
    marginTop: 6,
    fontSize: 10,
    color: colors.textoSecundario,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    fontFamily: fonts.body,
    backgroundColor: colors.bege,
    padding: 20,
    borderRadius: 8,
    width: "80%",
  },

  modalTitle: {
    fontSize: 16,
    marginBottom: 20,
    textTransform: "uppercase",
    fontFamily: fonts.title,
    color: colors.vinhoEscuro,
  },
  modalText: {
    fontSize: 14,
    marginBottom: 20,
  },

  closeBtn: {
    paddingVertical: 10,
    position: "absolute",
    right: 12,
    top: 8,
  },
});
