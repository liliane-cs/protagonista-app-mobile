import "react-native-reanimated";
import "react-native-gesture-handler";
import { View, ActivityIndicator } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
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
import { Routers } from "./src/routers/index";
import RedeDeApoio from "./src/pages/RedeApoio";
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
  <NavigationContainer>
    <AuthProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StackRoutes />
        <Toast />
      </GestureHandlerRootView>
    </AuthProvider>
  </NavigationContainer>
);
}
