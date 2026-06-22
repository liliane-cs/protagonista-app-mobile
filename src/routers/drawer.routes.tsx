import React from "react";
import { View, Text } from "react-native";
import { DrawerParamList } from "./navigation";

import { TabsRoutes } from "./tab.routes";
import { MeuPerfil } from "../pages/MeuPerfil";
import { colors, fonts } from "../styles/theme";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { QRCodeCard } from "../components/QrCode";
import { styles } from "./styles";
const Drawer = createDrawerNavigator<DrawerParamList>();

function PlaceholderScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Tela em construção</Text>
    </View>
  );
}

export const DrawerRoutes = () => {
  return (
    <Drawer.Navigator
      screenOptions={() => ({
        title: "Protagoniza",
        headerStyle: {
          backgroundColor: colors.vinhoEscuro,
          height: 70,
        },
        drawerActiveTintColor: colors.bege,
        drawerActiveBackgroundColor: colors.vinhoEscuro,

        drawerInactiveTintColor: colors.vinhoEscuro,
        drawerPosition: "right",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 18,
          fontFamily: fonts.title,
          color: colors.textoInvertido,
        },
        headerTitleAlign: "left",
        headerTintColor: colors.textoInvertido,
      })}
      drawerContent={(props) => (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
          <DrawerItemList {...props} />

          <View style={styles.containerQrCode}>
            <Text style={styles.title}>Compartilhe seu perfil</Text>
            <QRCodeCard caminho="usuario" />
          </View>
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen
        name="Inicio"
        component={TabsRoutes}
        options={{
          drawerLabel: "Início",
        }}
      />

      <Drawer.Screen
        name="Favoritos"
        component={PlaceholderScreen}
        options={{
          drawerLabel: "Favoritos",
        }}
      />

      <Drawer.Screen
        name="MeuPerfil"
        component={MeuPerfil}
        options={{
          drawerLabel: "Meu Perfil",
        }}
      />
    </Drawer.Navigator>
  );
};
