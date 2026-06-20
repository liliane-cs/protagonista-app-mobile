import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styles } from "./styles";
import { TabParamList } from "./navigation";

import { Home } from "../pages/Home";
// import { Oportunidades } from "../pages/Oportunidades";
// import { Cursos } from "../pages/Cursos";
import RedeDeApoio from "../pages/RedeApoio";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { colors } from "../styles/theme";

const Tab = createBottomTabNavigator<TabParamList>();
type IconName = React.ComponentProps<typeof Ionicons>["name"];
const renderIcon = (iconName: IconName, focused: boolean) => {
  return (
    <View
      style={[
        styles.iconContainer,
        focused && {
          backgroundColor: colors.vinhoEscuro,
          transform: "scale(1.3)",
          marginTop: 10,
        },
      ]}
    >
      <Ionicons
        name={iconName}
        size={16}
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
          tabBarLabel: ({ focused, color }) =>
            focused ? null : <Text style={styles.label}>Home</Text>,
        }}
      />
      <Tab.Screen
        name="Profissionais"
        // component={Profissionais}
        component={() => (
          <View>
            <Text>Profissionais</Text>
          </View>
        )}
        options={{
          tabBarIcon: ({ focused }) => renderIcon("people-outline", focused),
          tabBarLabel: ({ focused, color }) =>
            focused ? null : (
              <Text style={{ fontSize: 12, color }}>Profissionais</Text>
            ),
        }}
      />
      <Tab.Screen
        name="Oportunidades"
        // component={Oportunidades}
        component={() => (
          <View>
            <Text>Oportunidades</Text>
          </View>
        )}
        options={{
          tabBarIcon: ({ focused }) => renderIcon("briefcase-outline", focused),
          tabBarLabel: ({ focused, color }) =>
            focused ? null : <Text style={styles.label}>Oportunidade</Text>,
        }}
      />

      <Tab.Screen
        name="Cursos"
        //  component={Cursos}
        component={() => (
          <View>
            <Text>Cursos</Text>
          </View>
        )}
        options={{
          tabBarIcon: ({ focused }) => renderIcon("book-outline", focused),
          tabBarLabel: ({ focused, color }) =>
            focused ? null : <Text style={styles.label}>Cursos</Text>,
        }}
      />
      <Tab.Screen
        name="Apoio"
        component={RedeDeApoio}
        options={{
          tabBarIcon: ({ focused }) =>
            renderIcon("people-circle-outline", focused),
          tabBarLabel: ({ focused, color }) =>
            focused ? null : <Text style={styles.label}>Apoio</Text>,
        }}
      />
    </Tab.Navigator>
  );
};
