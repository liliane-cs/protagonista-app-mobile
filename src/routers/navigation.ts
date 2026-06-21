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
  Inicio: undefined;
  Home: undefined;
  Profissionais: undefined;
  Favoritos: undefined;
  MeuPerfil: undefined;
};

export type StackParamList = {
  Inicio: undefined;
  Home: undefined;
  MeuPerfil: undefined;
  Login: undefined;
  Cadastro: undefined;
  DrawerRoutes: undefined;

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
