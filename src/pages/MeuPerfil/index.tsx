import * as ImagePicker from "expo-image-picker";
import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { useAuth } from "../../hook/useAuth";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import Toast from "react-native-toast-message";
import { Feather as Icone } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Form } from "../../components/Form";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/Error";

import {
  atualizarProfissional,
  deletarProfissional,
} from "../../services/protagonizaService";

import { estilos } from "./style";
import { MeuPerfilProps } from "./types";
import { StackParamList } from "../../routers/navigation";

type NavigationProps = NativeStackNavigationProp<StackParamList>;

const ACESSOS = [
  { icone: "heart", label: "Profissionais Salvos" },
  { icone: "book-open", label: "Meus Cursos" },
  { icone: "settings", label: "Configurações" },
  { icone: "log-out", label: "Sair" },
] as const;

export const MeuPerfil = ({}: MeuPerfilProps) => {
  const { usuario, isLoadingAuth, atualizarUsuario, removerSessao } = useAuth();
  const navigation = useNavigation<NavigationProps>();

  const [editando, setEditando] = useState(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [cidade, setCidade] = useState("");
  const [descricao, setDescricao] = useState("");
  const [contato, setContato] = useState("");
  const [foto, setFoto] = useState("");
  const [senha, setSenha] = useState("");

  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarNovaSenha, setConfirmarNovaSenha] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [confirmarDelete, setConfirmarDelete] = useState(false);

  useEffect(() => {
    if (usuario) {
      setNome(usuario.nome || "");
      setEmail(usuario.email || "");
      setArea(usuario.area || "");
      setCidade(usuario.cidade || "");
      setDescricao(usuario.descricao || "");
      setContato(usuario.contato || "");
      setFoto(usuario.foto || "");
      setSenha(usuario.senha || "");
    }
  }, [usuario]);

  function abrirEdicao() {
    setConfirmarDelete(false);
    setEditando(true);
  }

  function fecharEdicao() {
    setConfirmarDelete(false);
    setEditando(false);
  }

  async function salvar() {
    if (!nome || !email || !area || !cidade) {
      Toast.show({
        type: "error",
        text1: "Preencha os campos obrigatórios, protagonista!",
      });
      return;
    }

    let senhaFinal = senha;

    if (senhaAtual || novaSenha || confirmarNovaSenha) {
      if (senhaAtual !== senha) {
        Toast.show({
          type: "error",
          text1: "A senha atual está incorreta!",
        });
        return;
      }
      if (novaSenha.length < 6) {
        Toast.show({
          type: "error",
          text1: "A nova senha deve ter pelo menos 6 caracteres!",
        });
        return;
      }
      if (novaSenha !== confirmarNovaSenha) {
        Toast.show({
          type: "error",
          text1: "As novas senhas não coincidem!",
        });
        return;
      }
      senhaFinal = novaSenha;
    }

    setIsLoading(true);

    try {
      const dadosAtualizados = {
        nome,
        email,
        area,
        cidade,
        descricao,
        contato,
        foto,
        senha: senhaFinal,
      };

      await atualizarProfissional(usuario!.id, dadosAtualizados);
      await atualizarUsuario(dadosAtualizados);

      setSenha(senhaFinal);
      setSenhaAtual("");
      setNovaSenha("");
      setConfirmarNovaSenha("");

      Toast.show({
        type: "success",
        text1: "Perfil atualizado com sucesso!",
      });

      fecharEdicao();
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Não conseguimos atualizar seu brilho agora!",
      });
    }

    setIsLoading(false);
  }

  function confirmarDelecao() {
    Alert.alert(
      "Deletar conta",
      "Tem certeza que deseja sair dos holofotes? Esta ação não pode ser desfeita.",
      [
        {
          text: "Cancelar",
          onPress: () => setConfirmarDelete(false),
          style: "cancel",
        },
        {
          text: "Deletar",
          onPress: deletar,
          style: "destructive",
        },
      ],
    );
  }

  async function deletar() {
    try {
      await deletarProfissional(usuario!.id);

      Toast.show({
        type: "success",
        text1: "Até logo, protagonista!",
      });

      await new Promise((resolve) => setTimeout(resolve, 1500));

      await removerSessao();
      navigation.replace("Inicio");
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Não foi possível encerrar sua jornada agora.",
      });
    }
  }

 async function escolherFoto() {
  Alert.alert("Foto de perfil", "Como deseja atualizar sua foto?", [
    {
      text: "Câmera",
      onPress: async () => {
        const permissao = await ImagePicker.requestCameraPermissionsAsync();
        if (!permissao.granted) {
          Toast.show({ type: "error", text1: "Permissão de câmera negada!" });
          return;
        }
        const resultado = await ImagePicker.launchCameraAsync({
          quality: 0.7,
        });
        if (!resultado.canceled) {
          setFoto(resultado.assets[0].uri);
        }
      },
    },
    {
      text: "Galeria",
      onPress: async () => {
        const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissao.granted) {
          Toast.show({ type: "error", text1: "Permissão de galeria negada!" });
          return;
        }
        const resultado = await ImagePicker.launchImageLibraryAsync({
          quality: 0.7,
        });
        if (!resultado.canceled) {
          setFoto(resultado.assets[0].uri);
        }
      },
    },
    { text: "Cancelar", style: "cancel" },
  ]);
}
  if (isLoadingAuth) {
    return <Loading />;
  }

  if (!usuario) {
    return <ErrorMessage />;
  }

  if (editando) {
    return (
      <View style={estilos.screenEditar}>
        {isLoading && <Loading />}

        <View style={estilos.editHeader}>
          <TouchableOpacity onPress={fecharEdicao}>
            <Icone name="arrow-left" size={22} color="#fff" />
          </TouchableOpacity>
          <Text style={estilos.editHeaderTitulo}>Editar Perfil</Text>
          <View style={{ width: 22 }} />
        </View>

        <ScrollView
          contentContainerStyle={estilos.scroll}
          showsVerticalScrollIndicator={false}
        >
          <View style={estilos.editFotoWrapper}>
            <View style={estilos.editFotoCirculo}>
              {foto ? (
                <Image source={{ uri: foto }} style={estilos.editFoto} />
              ) : (
                <View
                  style={[
                    estilos.editFoto,
                    { alignItems: "center", justifyContent: "center" },
                  ]}
                >
                  <Icone name="user" size={36} color="#B07080" />
                </View>
              )}
            </View>

            <TouchableOpacity
              style={estilos.alterarFotoTexto}
              onPress={escolherFoto}
            >
              <Icone name="camera" size={18} color="#fff" />
              <Text style={{ color: "#fff", fontSize: 11, marginTop: 2 }}>
                Alterar foto
              </Text>
            </TouchableOpacity>
          </View>

          <View style={estilos.camposWrapper}>
            <Form.Input
              label="Descrição"
              labelColor={estilos.editLabel.color}
              inputStyle={estilos.editInput}
              icon="edit-2"
              placeholder="Sua descrição"
              value={descricao}
              onChangeText={setDescricao}
            />
            <Form.Input
              label="E-mail"
              labelColor={estilos.editLabel.color}
              inputStyle={estilos.editInput}
              icon="mail"
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <Form.Input
              label="Nome completo"
              labelColor={estilos.editLabel.color}
              inputStyle={estilos.editInput}
              icon="user"
              placeholder="Nome completo"
              value={nome}
              onChangeText={setNome}
            />
            <Form.Input
              label="Contato"
              labelColor={estilos.editLabel.color}
              inputStyle={estilos.editInput}
              icon="phone"
              placeholder="Contato"
              value={contato}
              onChangeText={setContato}
            />
            <Form.Input
              label="Foto (link)"
              labelColor={estilos.editLabel.color}
              inputStyle={estilos.editInput}
              icon="image"
              placeholder="Cole o link da sua foto"
              value={foto}
              onChangeText={setFoto}
            />
            <Form.Input
              label="Área de atuação"
              labelColor={estilos.editLabel.color}
              inputStyle={estilos.editInput}
              icon="briefcase"
              placeholder="Área de atuação"
              value={area}
              onChangeText={setArea}
            />
            <Form.Input
              label="Cidade"
              labelColor={estilos.editLabel.color}
              inputStyle={estilos.editInput}
              icon="map-pin"
              placeholder="Cidade"
              value={cidade}
              onChangeText={setCidade}
            />
            <Form.Input
              label="Senha atual"
              labelColor={estilos.editLabel.color}
              inputStyle={estilos.editInput}
              icon="lock"
              placeholder="Digite sua senha atual"
              value={senhaAtual}
              onChangeText={setSenhaAtual}
              isPassword
            />
            <Form.Input
              label="Nova senha"
              labelColor={estilos.editLabel.color}
              inputStyle={estilos.editInput}
              icon="lock"
              placeholder="Crie uma nova senha"
              value={novaSenha}
              onChangeText={setNovaSenha}
              isPassword
            />
            <Form.Input
              label="Confirmar nova senha"
              labelColor={estilos.editLabel.color}
              inputStyle={estilos.editInput}
              icon="lock"
              placeholder="Repita sua nova senha"
              value={confirmarNovaSenha}
              onChangeText={setConfirmarNovaSenha}
              isPassword
            />
          </View>

          <View style={{ marginHorizontal: 20, marginTop: 24 }}>
            <Form.Button
              onPress={salvar}
              disabled={isLoading}
              buttonStyle={estilos.editBotaoSalvar}
              textStyle={estilos.editBotaoSalvarTexto}
            >
              Atualizar meu protagonismo
            </Form.Button>

            {!confirmarDelete ? (
              <TouchableOpacity
                style={estilos.botaoExcluir}
                onPress={() => setConfirmarDelete(true)}
              >
                <Text style={estilos.botaoExcluirTexto}>
                  Quero sair dos holofotes
                </Text>
              </TouchableOpacity>
            ) : (
              <>
                <Text style={[estilos.editSubtitulo, { marginLeft: 0 }]}>
                  Não deixe seu protagonismo! Fique por aqui.
                </Text>
                <TouchableOpacity
                  style={estilos.botaoExcluir}
                  onPress={confirmarDelecao}
                >
                  <Text style={estilos.botaoExcluirTexto}>
                    Sim, quero sair dos holofotes
                  </Text>
                </TouchableOpacity>
                <Form.Button onPress={() => setConfirmarDelete(false)}>
                  Não! Continuo aqui
                </Form.Button>
              </>
            )}
          </View>
        </ScrollView>

        <Toast />
      </View>
    );
  }

  return (
    <View style={estilos.screen}>
      {isLoading && <Loading />}

      <View style={estilos.header}>
        <Text style={estilos.appName}>MEU PERFIL</Text>
        <Icone name="bell" size={15} color="#fff" />
      </View>

      <ScrollView
        contentContainerStyle={estilos.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={estilos.perfilHero}>
          <View style={estilos.fotoWrapper}>
            {foto ? (
              <Image source={{ uri: foto }} style={estilos.foto} />
            ) : (
              <View style={estilos.fotoPlaceholder}>
                <Icone name="user" size={40} color="#B07080" />
              </View>
            )}
          </View>

          <Text style={estilos.nome}>{nome}</Text>
          <Text style={estilos.cargo}>{area}</Text>

          <View style={estilos.cidadeRow}>
            <Icone name="map-pin" size={13} color="#E8C9D0" />
            <Text style={estilos.cidadeTexto}>{cidade}</Text>
          </View>

          <TouchableOpacity
            style={estilos.botaoEditarFlutuante}
            onPress={abrirEdicao}
          >
            <Icone name="edit-2" size={20} color="#fff" />
          </TouchableOpacity>

          <Text style={estilos.botaoEditarLabel}>Editar perfil</Text>
        </View>

        <Text style={estilos.acessosLabel}>ACESSOS RÁPIDOS</Text>

        {ACESSOS.map((item) => (
          <TouchableOpacity key={item.label} style={estilos.itemAcesso}>
            <View style={estilos.itemAcessoEsquerda}>
              <View style={estilos.itemAcessoIconeWrapper}>
                <Icone name={item.icone} size={18} color="#fff" />
              </View>
              <Text style={estilos.itemAcessoTexto}>{item.label}</Text>
            </View>
            <Icone name="chevron-right" size={18} color="#B07080" />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Toast />
    </View>
  );
};