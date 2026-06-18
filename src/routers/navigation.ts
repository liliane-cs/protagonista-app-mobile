import { NavigatorScreenParams } from "@react-navigation/native";

export type TabParamList = {
  Home: undefined;
  Oportunidades: undefined;
  Cursos: undefined;
  Apoio: undefined;
};

export type DrawerParamList = {
  TabsRoutes: NavigatorScreenParams<TabParamList>;
  Profissionais: undefined;
  Favoritos: undefined;
  MeuPerfil: undefined;
};

export type StackParamList = {
  Login: undefined;
  Cadastro: undefined;
  DrawerRoutes: NavigatorScreenParams<DrawerParamList>;
  ProfissionalDetalhe: { id: string };
  OportunidadeDetalhe: { id: string };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}