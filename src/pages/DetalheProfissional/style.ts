import { StyleSheet } from "react-native";
import { colors as Colors, fonts as Fonts } from "../../styles/theme";

export const makeStyles = (colors: typeof Colors, fonts: typeof Fonts) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.fundo,
    },
    container: {
      flex: 1,
    },
    scrollContent: {
      paddingHorizontal: 20,
      paddingTop: 12,
      paddingBottom: 32,
    },

    header: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      marginBottom: 16,
    },
    backIcon: {
      padding: 4,
    },
    headerTitle: {
      fontFamily: fonts.title,
      fontSize: 17,
      color: colors.texto,
    },

    centered: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 12,
    },
    errorText: {
      fontFamily: fonts.bodyBold,
      fontSize: 15,
      color: colors.vinhoPrincipal,
      textAlign: "center",
      marginTop: 8,
    },

    // Profile image
    profileImage: {
      width: "100%",
      height: 220,
      borderRadius: 16,
      marginBottom: 16,
      backgroundColor: colors.bege,
    },

    name: {
      fontFamily: fonts.title,
      fontSize: 20,
      color: colors.texto,
      textAlign: "center",
      marginBottom: 16,
    },

    // Info card
    card: {
      backgroundColor: colors.fundoPrincipal,
      borderRadius: 16,
      padding: 16,
    },
    infoRow: {
      flexDirection: "row",
      alignItems: "flex-start",
      gap: 10,
      marginBottom: 16,
    },
    infoRowLast: {
      marginBottom: 0,
    },
    infoIcon: {
      marginTop: 1,
    },
    infoTextWrap: {
      flex: 1,
    },
    infoLabel: {
      fontFamily: fonts.bodyBold,
      fontSize: 10.5,
      color: colors.subtitulo,
      textTransform: "uppercase",
      letterSpacing: 0.5,
      marginBottom: 2,
    },
    infoValue: {
      fontFamily: fonts.body,
      fontSize: 13.5,
      color: colors.texto,
      lineHeight: 19,
    },

    contactButton: {
      backgroundColor: colors.vinhoPrincipal,
      borderRadius: 12,
      paddingVertical: 14,
      alignItems: "center",
      marginTop: 16,
    },
    contactButtonText: {
      fontFamily: fonts.bodyBold,
      fontSize: 14,
      color: colors.textoInvertido,
    },
  });

export type ProfissionalDetalheStyles = ReturnType<typeof makeStyles>;