import "react-native-reanimated";
import "react-native-gesture-handler";

import React, { useEffect, useState } from "react";
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
import { StackRoutes } from "./src/routers/stack.routes";
import { AuthProvider } from "./src/contexts/AuthContext";
import { FavoritosProvider } from "./src/contexts/FavoritesContext";
import SplashScreen from "./src/pages/Splash";

export default function App() {
  const [mostrarSplash, setMostrarSplash] = useState(true);

  const [fontsLoaded] = useFonts({
    LibreCaslonText_400Regular,
    LibreCaslonText_700Bold,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_700Bold,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#7a1218" />
      </View>
    );
  }

  if (mostrarSplash) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <FavoritosProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <StackRoutes />
            <Toast />
          </GestureHandlerRootView>
        </FavoritosProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}