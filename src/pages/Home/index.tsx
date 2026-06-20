import React, { useEffect, useState } from "react";
import { styles } from "./style";
import fundo from "../../../assets/imagemEntrada.png";
import banner from "../../../assets/bannerHome.png";

import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import Button from "../../components/Button";
import { ScrollView } from "react-native-gesture-handler";
import { IconeCard } from "../../components/IconeCard";

export const Home = () => {
  const [modo, setModo] = useState<"inicio" | "home">("inicio");
  const [nome, setNome] = useState("");

  const getSaudacao = () => {
    const hora = new Date().getHours();

    if (hora < 12) return "Bom dia";
    if (hora < 18) return "Boa tarde";
    return "Boa noite";
  };
  const saudacao = nome ? `${getSaudacao()}, ${nome}` : `${getSaudacao()}`;

  if (modo === "inicio") {
    return (
      <ImageBackground
        style={styles.startContainer}
        source={fundo}
        resizeMode="cover"
      >
        <Text style={styles.title}>
          Mulheres {"\n"}que apoiam, {"\n"}juntas {"\n"}transformam.
        </Text>

        <Text style={styles.text}>
          Conecte-se, compartilhe e cresça com uma rede de apoio entre mulheres.
        </Text>

        <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              // onPress={() => setModo("logado")}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.buttonSecondary]}
              // onPress={() => setModo("logado")}
            >
              <Text style={styles.buttonSecondaryText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => setModo("home")}
          >
            <Text style={styles.secondaryText}>Continuar como visitante</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
  if (modo === "home") {
    return (
      <ScrollView style={styles.home}>
        <Text style={styles.saudacao}>{saudacao}</Text>
        <Text>Que bom te ver por aqui!</Text>
        <Image source={banner} style={styles.banner} resizeMode="contain" />

        <View style={styles.iconesContainer}>
          <IconeCard
            icon="home-outline"
            label="serviços"
            modalText="Monte seu perfil profissional, mostre o que você faz e seja
              encontrada por quem precisa dos seus serviços — sem precisar pagar
              por anúncio."
          />
          <IconeCard
            icon="home-outline"
            label="serviços"
            modalText="Monte seu perfil profissional, mostre o que você faz e seja
          encontrada por quem precisa dos seus serviços — sem precisar pagar
              por anúncio."
          />
          <IconeCard
            icon="home-outline"
            label="serviços"
            modalText="Monte seu perfil profissional, mostre o que você faz e seja
          encontrada por quem precisa dos seus serviços — sem precisar pagar
              por anúncio."
          />
          <IconeCard
            icon="home-outline"
            label="serviços"
            modalText="Monte seu perfil profissional, mostre o que você faz e seja
          encontrada por quem precisa dos seus serviços — sem precisar pagar
          por anúncio."
          />
          <IconeCard
            icon="home-outline"
            label="serviços"
            modalText="Monte seu perfil profissional, mostre o que você faz e seja
          encontrada por quem precisa dos seus serviços — sem precisar pagar
          por anúncio."
          />
          <IconeCard
            icon="home-outline"
            label="serviços"
            modalText="Monte seu perfil profissional, mostre o que você faz e seja
          encontrada por quem precisa dos seus serviços — sem precisar pagar
          por anúncio."
          />
        </View>
      </ScrollView>
    );
  }
};
