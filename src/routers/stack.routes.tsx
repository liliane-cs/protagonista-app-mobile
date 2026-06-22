import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StackParamList } from "./navigation";

import { TelaInicio } from "../pages/TelaInicial";
import { Login } from "../pages/Login";
import { Cadastro } from "../pages/Cadastro";
import { DrawerRoutes } from "./drawer.routes";
import { MeuPerfil } from "../pages/MeuPerfil";
import { DetalheOportunidade } from "../pages/DetalheOportunidade";
import ProfissionalDetalhe from "../pages/DetalheProfissional";
import Loading from "../components/Loading";

import { useAuth } from "../hook/useAuth";
import { Home } from "../pages/Home";

const Stack = createNativeStackNavigator<StackParamList>();

export const StackRoutes = () => {
  const { usuario, isLoadingAuth } = useAuth();

  if (isLoadingAuth) return <Loading />;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inicio" component={TelaInicio} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="DrawerRoutes" component={DrawerRoutes} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MeuPerfil" component={MeuPerfil} />
      <Stack.Screen name="OportunidadeDetalhe" component={DetalheOportunidade} />
      <Stack.Screen name="ProfissionalDetalhe" component={ProfissionalDetalhe} />
    </Stack.Navigator>
  );
};