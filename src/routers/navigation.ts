import { NavigatorScreenParams } from "@react-navigation/native";

export type TabParamList = {
  Home: undefined;
  Oportunidades: undefined;
  Cursos: undefined;
  Apoio: undefined;
};

export type DrawerParamList = {
  HomeTabs: NavigatorScreenParams<TabParamList>;
  Profissionais: undefined;
  Favoritos: undefined;
  MeuPerfil: undefined;
};

export type StackParamList = {
  Login: undefined;
  Cadastro: undefined;
  DrawerRoutes: undefined;

  
  ProfissionalDetalhe: {
    id: string;
  };

  DetalheOportunidade: {
    id: string;
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}
