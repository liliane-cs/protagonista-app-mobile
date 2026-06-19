// stackRoutes.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import { StackParamList } from './navigation';
import { DrawerRoutes } from './drawer.routes';

const Stack = createNativeStackNavigator<StackParamList>();

function PlaceholderScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
      <Stack.Screen name="Login" component={PlaceholderScreen} />
      <Stack.Screen name="Cadastro" component={PlaceholderScreen} />
      <Stack.Screen name="DrawerRoutes" component={DrawerRoutes} />
      <Stack.Screen name="ProfissionalDetalhe" component={PlaceholderScreen} />
      <Stack.Screen name="OportunidadeDetalhe" component={PlaceholderScreen} />
    </Stack.Navigator>
  );
};