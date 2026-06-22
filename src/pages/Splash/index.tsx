import React, { useEffect, useRef } from "react";
import { Animated, View, Text, StyleSheet } from "react-native";

export default function SplashScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),

      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.logo,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        Protagoniza
      </Animated.Text>

      <Text style={styles.subtitulo}>
        Conectando mulheres ao mercado de trabalho
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF0F5",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#7a1218",
  },

  subtitulo: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
    color: "#333",
  },
});
