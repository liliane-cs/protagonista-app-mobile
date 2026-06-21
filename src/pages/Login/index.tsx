import { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { StackParamList } from "../../routers/navigation";
import { estilos } from "./style";
import { darkColors } from "../../styles/theme";

import { Form } from "../../components/Form";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/Error";

import { getProfissionais } from "../../services/protagonizaService";

type NavigationProps = NativeStackNavigationProp<StackParamList>;

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [erro, setErro] = useState(false);

  const navigation = useNavigation<NavigationProps>();

  async function fazerLogin() {
    if (!email || !senha) {
      Toast.show({
        type: "error",
        text1: "Preencha todos os campos, protagonista!",
      });
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
      Toast.show({ type: "error", text1: "Digite um e-mail válido!" });
      return;
    }

    if (senha.length < 6) {
      Toast.show({
        type: "error",
        text1: "A senha deve ter no mínimo 6 caracteres!",
      });
      return;
    }

    setIsLoading(true);

    try {
      const profissionais = await getProfissionais();
      const usuarioEncontrado = profissionais.find(
        (user) => user.email === email && user.senha === senha,
      );

      if (!usuarioEncontrado) {
        Toast.show({ type: "error", text1: "Email ou senha incorretos!" });
        setIsLoading(false);
        return;
      }

      Toast.show({
        type: "success",
        text1: `Seja bem-vinda, ${usuarioEncontrado.nome}!`,
        text2: "Que bom ter você aqui. ✨",
      });

      navigation.navigate("DrawerRoutes");
    } catch {
      setErro(true);
      Toast.show({
        type: "error",
        text1: "Algo não está certo, Protagonista!",
      });
    }

    setIsLoading(false);
  }

  if (erro) {
    return <ErrorMessage />;
  }

  return (
    <View style={estilos.container}>
      {isLoading && <Loading />}

      <ScrollView
        contentContainerStyle={estilos.conteudo}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={estilos.areaSuperior}>
          <Image
            source={require("../../assets/imagensGerais/imagem-login.png")}
            style={estilos.imagemPessoa}
            resizeMode="cover"
          />

          <View style={estilos.sombraUniforme} />

          <LinearGradient
            colors={["transparent", darkColors.fundo + "cc", darkColors.fundo]}
            locations={[0, 0.55, 1]}
            style={estilos.gradiente}
          />

          <View style={estilos.tituloWrapper}>
            <Text style={estilos.tituloNormal}>
              {"Seu lugar\nde "}
              <Text style={estilos.tituloDestaque}>Protagonizar!</Text>
            </Text>
            <Text style={estilos.subtitulo}>
              Faça login e descubra experiências únicas.
            </Text>
          </View>
        </View>

        <View style={estilos.formulario}>
          <View style={estilos.campoPadding}>
            <Form.Input
              label=""
              icon="mail"
              placeholder="Seu e-mail ou usuário"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>

          <View style={estilos.campoPadding}>
            <Form.Input
              label=""
              icon="lock"
              placeholder="Sua senha"
              value={senha}
              onChangeText={setSenha}
              isPassword
            />
          </View>

          <Form.Link onPress={() => {}}>Esqueci minha senha</Form.Link>

          <Form.Button onPress={fazerLogin} disabled={isLoading}>
            Entrar
          </Form.Button>

          <Form.Divider>ou entre com</Form.Divider>

          <Form.SocialButtons
            redes={[
              { nome: "google", icone: "google" },
              { nome: "facebook", icone: "facebook" },
              { nome: "apple", icone: "apple" },
            ]}
          />

          <Form.Footer
            texto="Não tem uma conta?"
            textoLink="Cadastre-se"
            onPress={() => navigation.navigate("Cadastro")}
          />
        </View>
      </ScrollView>

      <Toast />
    </View>
  );
};
