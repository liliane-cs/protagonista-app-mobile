import React from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import { styles } from "./style";
import { ErrorMessageProps } from "./types";
import confusedGirl from "../../assets/animacaoLottie/confused-girl.json";

function ErrorMessage({ mensagem }: ErrorMessageProps) {
  return (
    <View style={styles.container}>
      <LottieView source={confusedGirl} autoPlay loop style={styles.animacao} />
      <Text style={styles.mensagem}>
        {mensagem || "Algo deu errado. Tente novamente."}
      </Text>
    </View>
  );
}

export default ErrorMessage;
