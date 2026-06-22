import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StackParamList } from "./navigation";

import { Login } from "../pages/Login";
import { Cadastro } from "../pages/Cadastro";

import { DrawerRoutes } from "./drawer.routes";
import { TelaInicio } from "../pages/TelaInicial";

import { Home } from "../pages/Home";
import { DetalheOportunidade } from "../pages/DetalheOportunidade";
import { MeuPerfil } from "../pages/MeuPerfil";
import ProfissionalDetalhe from "../pages/DetalheProfissional";
import { View } from "react-native";
import { Text } from "react-native";

const Stack = createNativeStackNavigator<StackParamList>();

export const StackRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Inicio" component={TelaInicio} />
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Cadastro" component={Cadastro} />

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MeuPerfil" component={MeuPerfil} />
        <Stack.Screen name="DrawerRoutes" component={DrawerRoutes} />
        <Stack.Screen
          name="OportunidadeDetalhe"
          component={DetalheOportunidade}
        />
        <Stack.Screen
          name="ProfissionalDetalhe"
          component={ProfissionalDetalhe}
        />
        <Stack.Screen
          name="Favoritos"
          // component={Favoritos}
          component={() => (
            <View>
              <Text>Cursos</Text>
            </View>
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
