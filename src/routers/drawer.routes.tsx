import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerParamList } from "./navigation";

function PlaceholderScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Tela em construção</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator<DrawerParamList>();

export function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen 
        name="TabsRoutes" 
        component={PlaceholderScreen} 
        options={{ drawerLabel: "Início" }}
      />
      <Drawer.Screen 
        name="Profissionais" 
        component={PlaceholderScreen} 
        options={{ drawerLabel: "Profissionais" }}
      />
      <Drawer.Screen 
        name="Favoritos" 
        component={PlaceholderScreen} 
        options={{ drawerLabel: "Favoritos" }}
      />
      <Drawer.Screen 
        name="MeuPerfil" 
        component={PlaceholderScreen} 
        options={{ drawerLabel: "Meu Perfil" }}
      />
    </Drawer.Navigator>
  );
}