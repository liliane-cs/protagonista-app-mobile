import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { ImageBackground } from "react-native";
import { styles } from "./style";
import fundo from "../../../assets/imagemEntrada.png";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../routers/navigation";

type Props = {
  navigation: NativeStackNavigationProp<StackParamList, "Inicio">;
};
export const TelaInicio = ({ navigation }: Props) => {
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
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
            <Text
              style={styles.buttonSecondaryText}
              onPress={() => navigation.navigate("Cadastro")}
            >
              Cadastrar
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.secondaryText}>Continuar como visitante</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
