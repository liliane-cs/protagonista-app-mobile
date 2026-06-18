import { useState } from "react";
import { View, ScrollView } from "react-native";
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

import {
  getProfissionais,
  cadastrarProfissional,
} from "../../services/protagonizaService";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [cidade, setCidade] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [erro, setErro] = useState(false);

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

      const emailJaCadastrado = profissionais.find(
        (profissional) => profissional.email === email
      );

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
      });

      Toast.show({
        type: "success",
        text1: "Cadastro realizado com sucesso!",
      });

      setNome("");
      setEmail("");
      setArea("");
      setCidade("");
      setSenha("");
      setConfirmarSenha("");
    } catch (error) {
      setErro(true);

      Toast.show({
        type: "error",
        text1: "Algo deu errado. Tente novamente.",
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
            titulo="Crie sua conta"
            subtitulo="Preencha seus dados e entre para essa comuninidade incrivel!"
            
          />

          <FormInput
            label="Nome completo"
            iconName="user"
            placeholder="Seu nome de protagonista"
            value={nome}
            onChangeText={setNome}
          />

          <FormInput
            label="E-mail"
            iconName="mail"
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            label="Área de atuação"
            iconName="briefcase"
            placeholder="Em qual área você brilha?"
            value={area}
            onChangeText={setArea}
          />

          <FormInput
            label="Cidade"
            iconName="map-pin"
            placeholder="De onde você transforma ?"
            value={cidade}
            onChangeText={setCidade}
          />

          <FormInput
            label="Senha"
            iconName="lock"
            placeholder="Crie uma senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />

          <FormInput
            label="Confirmar senha"
            iconName="lock"
            placeholder="Confirme sua senha"
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            secureTextEntry
          />

          <FormButton
            texto="Começar minha jornada "
            onPress={cadastrar}
            disabled={isLoading}
          />

          <FormLink
            texto="Já faz parte dessa rede incrível?"
            textoDestaque="Login"
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </View>
  );
}