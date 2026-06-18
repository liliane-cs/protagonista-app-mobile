import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import { styles } from "./style";
import { LoadingProps } from "./types";
import loadingAnimation from "../../assets/animacaoLottie/loading-mulher.json";

function Loading({ mensagem }: LoadingProps) {
  return (
    <View style={styles.container}>
      <LottieView
        source={loadingAnimation}
        autoPlay
        loop
        style={styles.animacao}
      />
      <Text style={styles.mensagem}>
        {mensagem || "Carregando..."}
      </Text>
    </View>
  );
}

export default Loading;