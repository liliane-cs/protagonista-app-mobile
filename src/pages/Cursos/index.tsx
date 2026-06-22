import React, { useContext, useEffect, useRef, useState } from "react";
import { Animated, View, Text, FlatList } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { apiCursos } from "../../services/api";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/Error";
import { Card } from "../../components/Card";
import { styles } from "./style";
import Toast from "react-native-toast-message";
import { Curso } from "../../types/cursos";
import { getCurso } from "../../services/protagonizaService";
//import { FavoritosContext } from "../../context/FavoritosContext";

export default function Cursos() {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);
  const [areaSelecionada, setAreaSelecionada] = useState("");
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateAnim = useRef(new Animated.Value(-30)).current;

  //const { adicionarFavorito, estaFavoritado } =
  //useContext(FavoritosContext);

  useEffect(() => {
    async function carregarCursos() {
      try {
        const dados = await getCurso();

        setCursos(dados);
      } catch {
        setErro(true);

        Toast.show({
          type: "error",
          text1: "Não foi possível carregar os cursos.",
        });
      } finally {
        setTimeout(() => {
          setCarregando(false);
        }, 1500);
      }
    }

    carregarCursos();
  }, []);

  // 2. Efeito isolado para a animação de entrada
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, translateAnim]);

  if (carregando) return <Loading />;

  if (erro) {
    return <ErrorMessage mensagem="Não foi possível carregar os cursos." />;
  }

  const areas = [...new Set(cursos.map((curso) => curso.area))];

  const cursosFiltrados = areaSelecionada
    ? cursos.filter((curso) => curso.area === areaSelecionada)
    : cursos;

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Animated.Text
          style={[
            styles.titulo,
            {
              opacity: fadeAnim,
              transform: [
                {
                  translateY: translateAnim,
                },
              ],
            },
          ]}
        >
          Cursos Profissionalizantes
        </Animated.Text>

        <View style={styles.filtroContainer}>
          <Picker
            selectedValue={areaSelecionada}
            onValueChange={(value) => setAreaSelecionada(value)}
          >
            <Picker.Item label="Todas as áreas" value="" />

            {areas.map((area) => (
              <Picker.Item key={area} label={area} value={area} />
            ))}
          </Picker>
        </View>
      </View>

      <Animated.View
        style={{
          flex: 1,
          opacity: fadeAnim,
        }}
      >
        <FlatList
          data={cursosFiltrados}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.lista}
          renderItem={({ item }) => (
            <Card
              titulo={item.titulo}
              descricao={item.area}
              imagem={item.imagem}
            />
          )}
        />
      </Animated.View>
    </View>
  );
}
