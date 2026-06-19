import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { TabParamList } from './navigation'

// import { Home } from '../pages/Home'
// import { Oportunidades } from '../pages/Oportunidades'
// import { Cursos } from '../pages/Cursos'
// import { Apoio } from '../pages/Apoio'

const Tab = createBottomTabNavigator<TabParamList>()

export const TabsRoutes = () => {
  // return (
  //   <Tab.Navigator
  //     screenOptions={{
  //       headerShown: false,
  //     }}
  //   >
  //     <Tab.Screen
  //       name="Home"
  //       component={Home}
  //     />

  //     <Tab.Screen
  //       name="Oportunidades"
  //       component={Oportunidades}
  //     />

  //     <Tab.Screen
  //       name="Cursos"
  //       component={Cursos}
  //     />

  //     <Tab.Screen
  //       name="Apoio"
  //       component={Apoio}
  //     />
  //   </Tab.Navigator>
  // )
}