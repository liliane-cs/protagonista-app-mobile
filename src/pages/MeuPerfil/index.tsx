import { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import Toast from "react-native-toast-message";
import { Feather as Icone } from "@expo/vector-icons";

import { Form } from "../../components/Form";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/Error";

import {
  getProfissionais,
  atualizarProfissional,
  deletarProfissional,
} from "../../services/protagonizaService";

import { estilos } from "./style";
import { MeuPerfilProps } from "./types";

const ACESSOS = [
  { icone: "heart", label: "Profissionais Salvos" },
  { icone: "book-open", label: "Meus Cursos" },
  { icone: "settings", label: "Configurações" },
  { icone: "log-out", label: "Sair" },
] as const;

export const MeuPerfil = ({}: MeuPerfilProps) => {
  const [editando, setEditando] = useState(false);

  const [id, setId] = useState("");
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
  const [erro, setErro] = useState(false);
  const [confirmarDelete, setConfirmarDelete] = useState(false);

  useEffect(() => {
    async function carregarPerfil() {
      setIsLoading(true);

      try {
        const profissionais = await getProfissionais();
        const usuarioLogado = profissionais[0];

        if (!usuarioLogado) {
          setErro(true);
          return;
        }

        setId(String(usuarioLogado.id));
        setNome(usuarioLogado.nome || "");
        setEmail(usuarioLogado.email || "");
        setArea(usuarioLogado.area || "");
        setCidade(usuarioLogado.cidade || "");
        setDescricao(usuarioLogado.descricao || "");
        setContato(usuarioLogado.contato || "");
        setFoto(usuarioLogado.foto || "");
        setSenha(usuarioLogado.senha || "");
      } catch (error) {
        setErro(true);
        Toast.show({
          type: "error",
          text1: "Algo não está certo, Protagonista!",
        });
      }

      setIsLoading(false);
    }

    carregarPerfil();
  }, []);

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
      await atualizarProfissional(id, {
        nome,
        email,
        area,
        cidade,
        descricao,
        contato,
        foto,
        senha: senhaFinal,
      });

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

  async function deletar() {
    setIsLoading(true);

    try {
      await deletarProfissional(id);

      Toast.show({
        type: "success",
        text1: "Até logo, protagonista!",
      });

      fecharEdicao();
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Não foi possível encerrar sua jornada agora.",
      });
    }

    setIsLoading(false);
  }

  if (erro) {
    return <ErrorMessage />;
  }

  // ── TELA DE EDITAR PERFIL ─────────────────────────────────
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
            <TouchableOpacity style={estilos.alterarFotoTexto}>
              <Icone name="camera" size={18} color="#fff" />
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
                  onPress={deletar}
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

  // ── TELA DE PERFIL (VISUALIZAÇÃO) ─────────────────────────
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
