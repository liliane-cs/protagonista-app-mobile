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
import { AuthProvider } from "./src/contexts/AuthContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    LibreCaslonText_400Regular,
    LibreCaslonText_700Bold,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#7a1218" />
      </View>
    );
  }

  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <StackRoutes />
      <Toast />
    </AuthProvider>
  );
}