import React, { useEffect, useState } from "react";
import { styles } from "./style";
import fundo from "../../../assets/imagemEntrada.png";

import { ImageBackground, View, Text, TouchableOpacity } from "react-native";
import Button from "../../components/Button";

export const Home = () => {
  const [modo, setModo] = useState<"inicio" | "logado" | "visitante">("inicio");

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
              onPress={() => setModo("logado")}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.buttonSecondary]}
              onPress={() => setModo("logado")}
            >
              <Text style={styles.buttonSecondaryText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => setModo("visitante")}
          >
            <Text style={styles.secondaryText}>Continuar como visitante</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
};
