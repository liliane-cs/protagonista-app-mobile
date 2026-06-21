// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import { useFonts } from "expo-font";
// import {
//   LibreCaslonText_400Regular,
//   LibreCaslonText_700Bold,
// } from "@expo-google-fonts/libre-caslon-text";

// import {
//   PlusJakartaSans_400Regular,
//   PlusJakartaSans_700Bold,
// } from "@expo-google-fonts/plus-jakarta-sans";

// import { Card } from "./src/components/Card";

// export default function App() {
//   const [fontsLoaded] = useFonts({
//     LibreCaslonText_400Regular,
//     LibreCaslonText_700Bold,
//     PlusJakartaSans_400Regular,
//     PlusJakartaSans_700Bold,
//   });
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });


import { MeuPerfil } from './src/pages/MeuPerfil'
import { Routers } from './src/routers'

export default function App() {
  return <MeuPerfil/>
}
