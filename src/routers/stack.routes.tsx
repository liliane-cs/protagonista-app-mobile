import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";


import { StackParamList } from "./navigation";
import { DrawerRoutes } from "./drawer.routes";


function PlaceholderScreen({ route }: any) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Tela em construção: {route.name}</Text>
    </View>
  );
}

const Stack = createStackNavigator<StackParamList>();

export function StackRoutes() {
  return (
    <Stack.Navigator 
      initialRouteName="Login" 
      screenOptions={{ 
        headerShown: false 
      }}
    >
      
      <Stack.Screen name="Login" component={PlaceholderScreen} />
      <Stack.Screen name="Cadastro" component={PlaceholderScreen} />

    
      <Stack.Screen name="DrawerRoutes" component={DrawerRoutes} />

      
      <Stack.Screen 
        name="ProfissionalDetalhe" 
        component={PlaceholderScreen} 
        options={{ headerShown: true, title: "Detalhes do Profissional" }} 
      />
      <Stack.Screen 
        name="OportunidadeDetalhe" 
        component={PlaceholderScreen} 
        options={{ headerShown: true, title: "Detalhes da Oportunidade" }}
      />
    </Stack.Navigator>
  );
}