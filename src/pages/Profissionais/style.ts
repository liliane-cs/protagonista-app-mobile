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

    // Header
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      paddingTop: 12,
      paddingBottom: 8,
    },
    backIcon: {
      padding: 4,
    },
    title: {
      fontFamily: fonts.title,
      fontSize: 19,
      color: colors.texto,
    },
    filterButton: {
      width: 34,
      height: 34,
      borderRadius: 17,
      backgroundColor: colors.rosaClaro,
      justifyContent: "center",
      alignItems: "center",
    },

    // Search bar
    searchBar: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.fundoPrincipal,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: colors.bordaSuave,
      paddingHorizontal: 14,
      paddingVertical: 11,
      marginHorizontal: 20,
      marginBottom: 14,
      gap: 8,
    },
    searchInput: {
      flex: 1,
      fontFamily: fonts.body,
      fontSize: 14,
      color: colors.texto,
      padding: 0,
    },

    // List
    listContent: {
      paddingHorizontal: 20,
      paddingBottom: 24,
      gap: 10,
    },

    // Card (profissional item)
    card: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.fundoPrincipal,
      borderRadius: 16,
      padding: 10,
      gap: 12,
      marginBottom: 10,
    },
    cardImage: {
      width: 56,
      height: 56,
      borderRadius: 14,
      backgroundColor: colors.bege,
    },
    cardInfo: {
      flex: 1,
      minWidth: 0,
    },
    cardName: {
      fontFamily: fonts.bodyBold,
      fontSize: 14,
      color: colors.texto,
      marginBottom: 2,
    },
    cardArea: {
      fontFamily: fonts.body,
      fontSize: 12.5,
      color: colors.textoSecundario,
      marginBottom: 4,
    },
    cardLocationRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 3,
    },
    cardLocationText: {
      fontFamily: fonts.body,
      fontSize: 11.5,
      color: colors.textoSecundario,
    },

    // "Ver perfil" button
    verPerfilButton: {
      borderWidth: 1,
      borderColor: colors.rosaQueimado,
      borderRadius: 10,
      paddingHorizontal: 12,
      paddingVertical: 7,
    },
    verPerfilText: {
      fontFamily: fonts.bodyBold,
      fontSize: 11.5,
      color: colors.subtitulo,
    },

    // Loading / Empty / Error
    centered: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 12,
      paddingTop: 60,
    },
    emptyText: {
      fontFamily: fonts.body,
      fontSize: 14,
      color: colors.textoSecundario,
      textAlign: "center",
      marginTop: 8,
    },
    errorText: {
      fontFamily: fonts.bodyBold,
      fontSize: 14,
      color: colors.vinhoPrincipal,
      textAlign: "center",
      marginTop: 8,
    },
  });

export type ProfissionaisListaStyles = ReturnType<typeof makeStyles>;