import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabParamList } from "./navigation";

function PlaceholderScreen({ route }: any) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Tela em construção: {route.name}</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator<TabParamList>();

export function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={PlaceholderScreen} />
      <Tab.Screen name="Oportunidades" component={PlaceholderScreen} />
      <Tab.Screen name="Cursos" component={PlaceholderScreen} />
      <Tab.Screen name="Apoio" component={PlaceholderScreen} />
    </Tab.Navigator>
  );
}