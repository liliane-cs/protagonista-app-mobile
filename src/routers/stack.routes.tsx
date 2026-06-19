import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack'

import { StackParamList } from './navigation'

// import { Login } from '../pages/Login'
// import { Cadastro } from '../pages/Cadastro'

import { DrawerRoutes } from './drawer.routes'

// import { ProfissionalDetalhe } from '../pages/ProfissionalDetalhe'
// import { OportunidadeDetalhe } from '../pages/OportunidadeDetalhe'

const Stack =
  createNativeStackNavigator<StackParamList>()

export const StackRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
        /> */}

        <Stack.Screen
          name="DrawerRoutes"
          component={DrawerRoutes}
        />

        {/* <Stack.Screen
          name="ProfissionalDetalhe"
          component={ProfissionalDetalhe}
        />

        <Stack.Screen
          name="OportunidadeDetalhe"
          component={OportunidadeDetalhe}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
