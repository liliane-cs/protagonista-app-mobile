import React, { useEffect, useState } from "react";
import { styles } from "./style";
import banner from "../../../assets/bannerHome.png";
import { Modal } from "react-native";

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { IconeCard } from "../../components/IconeCard";
import { Livro } from "./types";
import Button from "../../components/Button";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../styles/theme";
import { MapaProfissionais } from "../../components/MapaProfissionais";
import { Evento } from "../../types/evento";
import { EventoDoMes } from "../../components/EventoDoMes";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../routers/navigation";

type NavigationProps = NativeStackNavigationProp<StackParamList, "Home">;

export const Home = () => {
  const navigation = useNavigation<NavigationProps>();
  const [nome, setNome] = useState("");

  const [livros, setLivros] = useState<Livro[]>([]);
  const [livroAtual, setLivroAtual] = useState<Livro | null>(null);
  const [busca, setBusca] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const evento: Evento = {
    titulo: "Workshop Mulheres na Tecnologia",
    data: "2026-07-10T19:00:00",
    local: "Online",
    descricao: "Um evento para impulsionar mulheres na área tech ",
  };

  const getSaudacao = () => {
    const hora = new Date().getHours();

    if (hora < 12) return "Bom dia";
    if (hora < 18) return "Boa tarde";
    return "Boa noite";
  };
  const saudacao = nome ? `${getSaudacao()}, ${nome}` : `${getSaudacao()}`;

  const getLivro = async (nome: string): Promise<Livro | null> => {
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${nome}`,
      );
      const data = await res.json();

      if (!data.docs.length) return null;

      return data.docs[0];
    } catch {
      return null;
    }
  };

  const adicionarLivro = async () => {
    if (!busca.trim()) return;

    setLoading(true);
    const livro = await getLivro(busca);

    if (livro) {
      setLivros((prev) => [...prev, livro]);
      setLivroAtual(livro);
      setBusca("");
    }

    setLoading(false);
    setModalVisible(false);
  };

  useEffect(() => {
    async function carregarLivro() {
      setLoading(true);

      const nomes = ["Mulheres que Correm com os Lobos", "Nasceu, e agora?"];

      const resultados = await Promise.all(nomes.map((nome) => getLivro(nome)));

      const validos = resultados.filter(Boolean) as Livro[];

      if (validos.length) {
        setLivros(validos);
        setLivroAtual(validos[0]);
      }

      setLoading(false);
    }

    carregarLivro();
  }, []);

  useEffect(() => {
    if (!livros.length) return;

    const interval = setInterval(() => {
      const random = livros[Math.floor(Math.random() * livros.length)];
      setLivroAtual(random);
    }, 5000);

    return () => clearInterval(interval);
  }, [livros]);

  return (
    <ScrollView style={styles.home}>
      <View style={styles.headerHome}>
        <Text style={styles.saudacao}>{saudacao}</Text>
        <Text>Que bom te ver por aqui!</Text>

        <View style={styles.accountIcon}>
          <Ionicons
            name="heart-outline"
            size={35}
            color={colors.rosaQueimado}
          />
          <TouchableOpacity onPress={() => navigation.navigate("MeuPerfil")}>
            <Ionicons
              name="person-circle"
              size={35}
              color={colors.rosaQueimado}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Image source={banner} style={styles.banner} resizeMode="cover" />

      <Text style={styles.titleHome}>O que você vai encontrar aqui</Text>
      <View style={styles.iconesContainer}>
        <IconeCard
          icon="people-outline"
          label="Profissionais"
          modalText="Monte seu perfil profissional, mostre o que você faz e seja
              encontrada por quem precisa dos seus serviços — sem precisar pagar
              por anúncio."
        />
        <IconeCard
          icon="briefcase-outline"
          label="Oportunidades"
          modalText="Monte seu perfil profissional, mostre o que você faz e seja
          encontrada por quem precisa dos seus serviços — sem precisar pagar
              por anúncio."
        />
        <IconeCard
          icon="book-outline"
          label="Cursos"
          modalText="Monte seu perfil profissional, mostre o que você faz e seja
          encontrada por quem precisa dos seus serviços — sem precisar pagar
              por anúncio."
        />
        <IconeCard
          icon="people-circle-outline"
          label="Rede de Apoio"
          modalText="Monte seu perfil profissional, mostre o que você faz e seja
          encontrada por quem precisa dos seus serviços — sem precisar pagar
          por anúncio."
        />
        <IconeCard
          icon="newspaper-outline"
          label="Serviços"
          modalText="Monte seu perfil profissional, mostre o que você faz e seja
          encontrada por quem precisa dos seus serviços — sem precisar pagar
          por anúncio."
        />
        <IconeCard
          icon="information-circle-outline"
          label="Sobre nós"
          modalText="Monte seu perfil profissional, mostre o que você faz e seja
          encontrada por quem precisa dos seus serviços — sem precisar pagar
          por anúncio."
        />
      </View>

      <EventoDoMes evento={evento} />

      <View style={styles.headerLivros}>
        <View>
          <Text style={styles.titleHome}>Leitura da comunidade</Text>
          <Text>Palavras que nos movem</Text>
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.addButtonText}>
            <Ionicons name="add-outline" size={20} />
          </Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator />
      ) : (
        livroAtual && (
          <View style={styles.bookCard}>
            <Image
              source={{
                uri: `https://covers.openlibrary.org/b/id/${livroAtual.cover_i}-M.jpg`,
              }}
              style={styles.bookImage}
            />
            <Text style={styles.cardTitle}>{livroAtual.title}</Text>
            <Text style={styles.bookAuthor}>{livroAtual.author_name?.[0]}</Text>
          </View>
        )
      )}

      <Modal transparent animationType="slide" visible={modalVisible}>
        <View style={styles.overlay}>
          <View style={styles.bottomSheet}>
            <Text style={styles.titleHome}>Indicar livro</Text>

            <TextInput
              style={styles.input}
              placeholder="Digite o nome do livro"
              value={busca}
              onChangeText={setBusca}
            />

            <Button onPress={adicionarLivro}>
              <Text style={styles.buttonText}>Enviar</Text>
            </Button>

            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{ textAlign: "center", marginTop: 10 }}>
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Text style={styles.titleHome}>Estamos em todo lugar</Text>
      {/* <MapaProfissionais /> */}
    </ScrollView>
  );
};
