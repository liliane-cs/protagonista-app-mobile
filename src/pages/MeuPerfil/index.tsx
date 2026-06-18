import { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import Toast from "react-native-toast-message";
import { Feather as Icone } from "@expo/vector-icons";

import { FormInput, FormButton } from "../../components/Form";

import { styles } from "../../components/Form/style";
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

export default function MeuPerfil({}: MeuPerfilProps) {
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
      <View style={estilos.screen}>
        {isLoading && <Loading />}

        <View style={estilos.editHeader}>
          <TouchableOpacity onPress={fecharEdicao}>
            <Icone name="arrow-left" size={22} color="#3B0A1F" />
          </TouchableOpacity>

          <Text style={estilos.editHeaderTitulo}>Editar Perfil</Text>

          <View style={{ width: 22 }} />
        </View>

        <ScrollView
          contentContainerStyle={styles.scroll}
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
                    {
                      backgroundColor: "#E8C9D0",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <Icone name="user" size={36} color="#B07080" />
                </View>
              )}
            </View>

            <TouchableOpacity style={estilos.alterarFotoTexto}>
              <Icone name="camera" size={14} color="#6B1A35" />
              <Text style={estilos.alterarFotoLabel}>Alterar foto</Text>
            </TouchableOpacity>
          </View>

          <Text style={estilos.editNome}>{nome}</Text>

          <Text style={estilos.editSubtitulo}>
            A protagonista da vez é você! ✨
          </Text>

          <View style={estilos.divisorLinha} />

          <View style={styles.card}>
            <FormInput
              label="Nome completo"
              iconName="user"
              placeholder="Como a protagonista atende pelo mundo?"
              value={nome}
              onChangeText={setNome}
            />

            <FormInput
              label="E-mail"
              iconName="mail"
              placeholder="Seu melhor e-mail de negócios, diva!"
              value={email}
              onChangeText={setEmail}
            />

            <FormInput
              label="Área de atuação"
              iconName="briefcase"
              placeholder="Qual é o seu superpoder profissional?"
              value={area}
              onChangeText={setArea}
            />

            <FormInput
              label="Cidade"
              iconName="map-pin"
              placeholder="De qual canto do Brasil você protagoniza?"
              value={cidade}
              onChangeText={setCidade}
            />

            <FormInput
              label="Sua história"
              iconName="message-square"
              placeholder="Conte um pouco sobre sua trajetória inspiradora"
              value={descricao}
              onChangeText={setDescricao}
            />

            <FormInput
              label="Contato"
              iconName="phone"
              placeholder="Como futuras clientes podem te encontrar?"
              value={contato}
              onChangeText={setContato}
            />

            <FormInput
              label="Foto"
              iconName="image"
              placeholder="Cole aqui o link da sua foto mais poderosa"
              value={foto}
              onChangeText={setFoto}
            />

            <FormInput
              label="Senha Atual"
              iconName="lock"
              placeholder="Digite sua senha atual"
              value={senhaAtual}
              onChangeText={setSenhaAtual}
              secureTextEntry
            />

            <FormInput
              label="Nova Senha"
              iconName="lock"
              placeholder="Crie uma nova senha poderosa"
              value={novaSenha}
              onChangeText={setNovaSenha}
              secureTextEntry
            />

            <FormInput
              label="Confirmar Nova Senha"
              iconName="lock"
              placeholder="Repita sua nova senha"
              value={confirmarNovaSenha}
              onChangeText={setConfirmarNovaSenha}
              secureTextEntry
            />

            <FormButton
              texto="Atualizar meu protagonismo"
              onPress={salvar}
              disabled={isLoading}
            />

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
                <Text style={estilos.editSubtitulo}>
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

                <FormButton
                  texto="Não! Continuo aqui"
                  onPress={() => setConfirmarDelete(false)}
                />
              </>
            )}
          </View>
        </ScrollView>

        <Toast />
      </View>
    );
  }

  // ── TELA DE PERFIL (visualização) ─────────────────────────
  return (
    <View style={estilos.screen}>
      {isLoading && <Loading />}

      <View style={estilos.header}>
        <Text style={estilos.appName}>MEU PERFIL</Text>
        <Icone name="bell" size={15} color="#3B0A1F" />
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
            <Icone name="map-pin" size={13} color="#7A4A5A" />
            <Text style={estilos.cidadeTexto}>{cidade}</Text>
          </View>

          <TouchableOpacity style={estilos.botaoEditar} onPress={abrirEdicao}>
            <Text style={estilos.botaoEditarTexto}>Editar Perfil</Text>
          </TouchableOpacity>
        </View>

        <View style={estilos.divisorLinha} />

        <Text style={estilos.acessosLabel}>ACESSOS RÁPIDOS</Text>

        {ACESSOS.map((item) => (
          <TouchableOpacity key={item.label} style={estilos.itemAcesso}>
            <View style={estilos.itemAcessoEsquerda}>
              <View style={estilos.itemAcessoIconeWrapper}>
                <Icone name={item.icone} size={18} color="#6B1A35" />
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
}
