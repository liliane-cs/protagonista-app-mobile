import 'react-native-reanimated';
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import {
  LibreCaslonText_400Regular,
  LibreCaslonText_700Bold,
} from "@expo-google-fonts/libre-caslon-text";
import {
  PlusJakartaSans_400Regular,
  PlusJakartaSans_700Bold,
} from "@expo-google-fonts/plus-jakarta-sans";
import Toast from "react-native-toast-message";
import { StackRoutes } from "./src/routers/stack.routes";

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

  return (
    <>
      <StatusBar style="auto" />
      <StackRoutes />
      <Toast />
    </>
  );
}

import { MeuPerfil } from './src/pages/MeuPerfil'
import { Routers } from './src/routers'

export default function App() {
  return <MeuPerfil/>
}
