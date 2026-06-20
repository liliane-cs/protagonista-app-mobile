import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { getProfissionaisById } from "../../services/protagonizaService";
import { Profissional } from "../../types/profissional";
import { makeStyles } from "./style";
import { colors, fonts } from "../../styles/theme"; 

export const ProfissionalDetalhe: React.FC = () => {
  
  const navigation = useNavigation();
  const route = useRoute(); 
  const styles = makeStyles(colors, fonts);
  const { id } = route.params as { id: string }; 
  
  const [profissional, setProfissional] = useState<Profissional | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [erro, setErro] = useState<boolean>(false);

  useEffect(() => {
    async function carregarProfissional() {
      try {
        const dados = await getProfissionaisById(id);
        setProfissional(dados);
      } catch {
        setErro(true);
      } finally {
        setLoading(false);
      }
    }

    carregarProfissional();
  }, [id]);

  if (loading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.centered}>
          <ActivityIndicator size="large" color={colors.vinhoPrincipal} />
        </View>
      </SafeAreaView>
    );
  }

  if (erro || !profissional) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.centered}>
          <MaterialIcons name="error-outline" size={44} color={colors.vinhoPrincipal} />
          <Text style={styles.errorText}>
            {erro ? "Não foi possível carregar o perfil" : "Profissional não encontrado"}
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={22} color={colors.texto} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Perfil</Text>
        </View>

        <Image
          source={{ uri: profissional.foto }}
          style={styles.profileImage}
          resizeMode="cover"
        />

        <Text style={styles.name}>{profissional.nome}</Text>

        <View style={styles.card}>
          <View style={styles.infoRow}>
            <MaterialIcons name="work" size={18} color={colors.subtitulo} style={styles.infoIcon} />
            <View style={styles.infoTextWrap}>
              <Text style={styles.infoLabel}>Área</Text>
              <Text style={styles.infoValue}>{profissional.area}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <MaterialIcons name="location-on" size={18} color={colors.subtitulo} style={styles.infoIcon} />
            <View style={styles.infoTextWrap}>
              <Text style={styles.infoLabel}>Cidade</Text>
              <Text style={styles.infoValue}>{profissional.cidade}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <MaterialIcons name="description" size={18} color={colors.subtitulo} style={styles.infoIcon} />
            <View style={styles.infoTextWrap}>
              <Text style={styles.infoLabel}>Descrição</Text>
              <Text style={styles.infoValue}>{profissional.descricao}</Text>
            </View>
          </View>

          <View style={[styles.infoRow, styles.infoRowLast]}>
            <MaterialIcons name="email" size={18} color={colors.subtitulo} style={styles.infoIcon} />
            <View style={styles.infoTextWrap}>
              <Text style={styles.infoLabel}>Contato</Text>
              <Text style={styles.infoValue}>{profissional.contato}</Text>
            </View>
          </View>
        </View>


        <TouchableOpacity style={styles.contactButton} activeOpacity={0.85}>
          <Text style={styles.contactButtonText}>Entrar em contato</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfissionalDetalhe;