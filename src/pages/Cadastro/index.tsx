
import React, { useState } from "react";
import { View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import Toast from "react-native-toast-message";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { StackParamList } from "../../routers/navigation";
import { estilos } from "./style";

import { Form } from "../../components/Form";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/Error";

import {
  getProfissionais,
  cadastrarProfissional,
} from "../../services/protagonizaService";

import { useAuth } from "../../hook/useAuth";

type NavigationProps = NativeStackNavigationProp<StackParamList>;

export const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [cidade, setCidade] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [erro, setErro] = useState(false);

  const navigation = useNavigation<NavigationProps>();
  const { salvarSessao } = useAuth();

  async function cadastrar() {
    if (!nome || !email || !area || !cidade || !senha || !confirmarSenha) {
      Toast.show({
        type: "error",
        text1: "Preencha todos os campos!",
      });
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailValido) {
      Toast.show({
        type: "error",
        text1: "Digite um e-mail válido!",
      });
      return;
    }

    if (senha.length < 6) {
      Toast.show({
        type: "error",
        text1: "A senha deve ter no mínimo 6 caracteres!",
      });
      return;
    }

    if (senha !== confirmarSenha) {
      Toast.show({
        type: "error",
        text1: "As senhas não coincidem!",
      });
      return;
    }

    setIsLoading(true);

    try {
      const profissionais = await getProfissionais();

      const emailJaCadastrado = profissionais.find((p) => p.email === email);

      if (emailJaCadastrado) {
        Toast.show({
          type: "error",
          text1: "Este e-mail já está cadastrado!",
        });
        setIsLoading(false);
        return;
      }

      await cadastrarProfissional({
        nome,
        email,
        area,
        cidade,
        senha,
        descricao: "",
        contato: "",
        foto: "",
      });

      setIsLoading(false);

      Toast.show({
        type: "success",
        text1: "Cadastro realizado com sucesso!",
        text2: `Bem-vinda, ${nome}! ✨`,
      });

      await new Promise((resolve) => setTimeout(resolve, 1500));

      navigation.replace("Login");
    } catch {
      setErro(true);
      Toast.show({
        type: "error",
        text1: "Algo deu errado. Tente novamente.",
      });
    }

    setIsLoading(false);
  }

  return (
    <View style={estilos.container}>
      {isLoading && <Loading />}

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={estilos.scroll}
        >
          <View style={estilos.header}>
            <Form.Title>Crie sua conta</Form.Title>

            <Form.Subtitle>
              {`Entre para essa comunidade incrível!`}
            </Form.Subtitle>
          </View>

          <View style={estilos.areaClara}>
            <View style={estilos.formulario}>
              <Form.Input
                label="Nome"
                icon="user"
                placeholder="Seu nome "
                value={nome}
                onChangeText={setNome}
              />

              <Form.Input
                label="E-mail"
                icon="mail"
                placeholder="Digite seu e-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />

              <Form.Input
                label="Área de atuação"
                icon="briefcase"
                placeholder="Qual área você brilha?"
                value={area}
                onChangeText={setArea}
              />

              <Form.Input
                label="Cidade"
                icon="map-pin"
                placeholder="Onde você transforma?"
                value={cidade}
                onChangeText={setCidade}
              />

              <Form.Input
                label="Senha"
                icon="lock"
                placeholder="Crie uma senha"
                value={senha}
                onChangeText={setSenha}
                isPassword
              />

              <Form.Input
                label="Confirmar senha"
                icon="lock"
                placeholder="Confirme sua senha"
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
                isPassword
              />

              <Form.Button
                onPress={cadastrar}
                disabled={isLoading}
                buttonStyle={estilos.botao}
                textStyle={estilos.textoBotao}
              >
                Começar minha jornada
              </Form.Button>

              <View style={estilos.footer}>
                <Form.Footer
                  texto="Já faz parte?"
                  textoLink="Login"
                  onPress={() => navigation.navigate("Login")}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <Toast />
    </View>
  );
};
