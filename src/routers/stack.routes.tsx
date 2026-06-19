// stackRoutes.tsx
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { StackParamList } from "./navigation";
import { DrawerRoutes } from "./drawer.routes";
import "./navigation";
// import { Login } from "../pages/Login";
// import { Cadastro } from "../pages/Cadastro";

const Stack = createNativeStackNavigator<StackParamList>();

function PlaceholderScreen({ route }: any) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Tela em construção</Text>
    </View>
  );
}

export const Routers = () => {
  return (
    <NavigationContainer>
      <StackRouters />
    </NavigationContainer>
  );
};

const StackRouters = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} /> */}
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
};
