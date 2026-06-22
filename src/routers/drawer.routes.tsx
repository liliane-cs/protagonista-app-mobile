import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { DrawerParamList } from "./navigation";
import { StackParamList } from "./navigation";

import { TabsRoutes } from "./tab.routes";
import { MeuPerfil } from "../pages/MeuPerfil";
import { Login } from "../pages/Login";
import { colors, fonts } from "../styles/theme";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { QRCodeCard } from "../components/QrCode";
import { styles } from "./styles";
import { useAuth } from "../hook/useAuth";
import { Ionicons } from "@expo/vector-icons";
import { Home } from "../pages/Home";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

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
  const { usuario, removerSessao } = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const handleLogout = async () => {
    await removerSessao();

    Toast.show({
      type: "success",
      text1: "Sessão encerrada",
      text2: "Até logo!",
    });

    navigation.replace("Inicio");
  };

  return (
    <Drawer.Navigator
      screenOptions={() => ({
        title: "Protagoniza",
        headerStyle: {
          backgroundColor: colors.vinhoEscuro,
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
          {usuario && (
            <>
              <TouchableOpacity
                onPress={handleLogout}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 16,
                  gap: 12,
                }}
              >
                <Ionicons name="log-out" size={18} color={colors.vinhoEscuro} />
                <Text
                  style={{ color: colors.vinhoEscuro, fontFamily: fonts.title }}
                >
                  Sair
                </Text>
              </TouchableOpacity>

              <View style={styles.containerQrCode}>
                <Text style={styles.title}>Compartilhe seu perfil</Text>
                <QRCodeCard caminho={`/${usuario?.nome}`} />
              </View>
            </>
          )}
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen
        name="HomeTabs"
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
          drawerItemStyle: !usuario ? { display: "none" } : undefined,
        }}
      />

      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          drawerLabel: "Fazer Login",
          drawerItemStyle: usuario ? { display: "none" } : undefined,
        }}
      />
    </Drawer.Navigator>
  );
};