import { NavigatorScreenParams } from "@react-navigation/native";

export type TabParamList = {
  Home: undefined;
  Oportunidades: undefined;
  Cursos: undefined;
  Apoio: undefined;
  Profissionais: undefined;
};

export type DrawerParamList = {
  HomeTabs: NavigatorScreenParams<TabParamList>;
  Profissionais: undefined;
  Favoritos: undefined;
  MeuPerfil: undefined;
};

export type StackParamList = {
  Inicio: undefined;
  Login: undefined;
  Cadastro: undefined;
  DrawerRoutes: undefined;
  MeuPerfil: undefined;
  ProfissionalDetalhe: {
    id: string;
  };
  OportunidadeDetalhe: {
    id: string;
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}
