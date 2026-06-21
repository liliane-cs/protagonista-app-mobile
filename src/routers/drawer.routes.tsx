import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { DrawerParamList } from './navigation'

import { TabsRoutes } from './tab.routes'
import { MeuPerfil } from '../pages/MeuPerfil'

const Drawer = createDrawerNavigator<DrawerParamList>()

function PlaceholderScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Tela em construção</Text>
    </View>
  )
}

export const DrawerRoutes = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Drawer.Screen
        name="HomeTabs"
        component={TabsRoutes}
        options={{
          drawerLabel: 'Início',
        }}
      /> */}

      <Drawer.Screen
        name="Profissionais"
        component={PlaceholderScreen}
      />

      <Drawer.Screen
        name="Favoritos"
        component={PlaceholderScreen}
      />

      <Drawer.Screen
        name="MeuPerfil"
        component={MeuPerfil}
        options={{
          drawerLabel: 'Meu Perfil',
        }}
      />
    </Drawer.Navigator>
  )
}