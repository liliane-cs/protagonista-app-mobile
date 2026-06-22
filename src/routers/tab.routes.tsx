import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styles } from "./styles";
import { TabParamList } from "./navigation";

import { Home } from "../pages/Home";
// import { Cursos } from "../pages/Cursos";
import RedeDeApoio from "../pages/RedeApoio";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { colors } from "../styles/theme";
import { Oportunidades } from "../pages/Oportunidades";
import Profissionais from "../pages/Profissionais";
import Cursos from "../pages/Cursos";

const Tab = createBottomTabNavigator<TabParamList>();
type IconName = React.ComponentProps<typeof Ionicons>["name"];
const renderIcon = (iconName: IconName, focused: boolean) => {
  return (
    <View
      style={[
        styles.iconContainer,
        focused && {
          backgroundColor: colors.vinhoEscuro,
          transform: "scale(1.1)",
        },
      ]}
    >
      <Ionicons
        name={iconName}
        size={20}
        color={focused ? colors.bege : colors.vinhoEscuro}
      />
    </View>
  );
};

export const TabsRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.label,
        tabBarActiveTintColor: colors.vinhoEscuro,
        tabBarInactiveTintColor: colors.vinhoEscuro,
        animation: "shift",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => renderIcon("home-outline", focused),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Profissionais"
        component={Profissionais}
        options={{
          tabBarIcon: ({ focused }) => renderIcon("people-outline", focused),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Oportunidades"
        component={Oportunidades}
        options={{
          tabBarIcon: ({ focused }) => renderIcon("briefcase-outline", focused),
          tabBarLabel: "",
        }}
      />

      <Tab.Screen
        name="Cursos"
        component={Cursos}
        
        options={{
          tabBarIcon: ({ focused }) => renderIcon("book-outline", focused),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Apoio"
        component={RedeDeApoio}
        options={{
          tabBarIcon: ({ focused }) =>
            renderIcon("people-circle-outline", focused),
          tabBarLabel: "",
        }}
      />
    </Tab.Navigator>
  );
};
