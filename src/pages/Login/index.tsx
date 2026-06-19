import { useState } from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import Toast from "react-native-toast-message";

import {
  FormTitle,
  FormInput,
  FormButton,
  FormLink,
} from "../../components/Form";

import { styles } from "../../components/Form/style";

import Loading from "../../components/Loading";
import ErrorMessage from "../../components/Error";

import { getProfissionais } from "../../services/protagonizaService";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [erro, setErro] = useState(false);

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
    } catch (error) {
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
    <View style={styles.screen}>
      {isLoading && <Loading />}

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <FormTitle
            titulo="Bem vinda, Protagonista! "
            subtitulo="Acesse sua conta e continue sua jornada."
          />

          <FormInput
            label="E-mail"
            iconName="mail"
            placeholder="nome@exemplo.com"
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            label="Senha"
            iconName="lock"
            placeholder="Sua senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />

          <TouchableOpacity style={styles.linkContainer}>
            <Text style={styles.linkDestaque}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <FormButton
            texto="Entrar"
            onPress={fazerLogin}
            disabled={isLoading}
          />

          <FormLink
            texto="Não tem uma conta?"
            textoDestaque="Cadastre-se"
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </View>
  );
}
