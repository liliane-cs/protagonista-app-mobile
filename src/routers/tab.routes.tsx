// tabsRoutes.tsx
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from './navigation';

const Tab = createBottomTabNavigator<TabParamList>();

function PlaceholderScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela em construção</Text>
    </View>
  );
}

export const TabsRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={PlaceholderScreen} />
      <Tab.Screen name="Oportunidades" component={PlaceholderScreen} />
      <Tab.Screen name="Cursos" component={PlaceholderScreen} />
      <Tab.Screen name="Apoio" component={PlaceholderScreen} />
    </Tab.Navigator>
  );
};