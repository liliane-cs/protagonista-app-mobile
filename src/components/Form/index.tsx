import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../styles/theme";
import { styles } from "./style";
import {
  FormTitleProps,
  FormInputProps,
  FormButtonProps,
  FormCaptionProps,
  FormLinkProps,
} from "./types";

export function FormTitle({ titulo, subtitulo }: FormTitleProps) {
  return (
    <View style={styles.tituloContainer}>
      <Text style={styles.titulo}>{titulo}</Text>
      {subtitulo ? <Text style={styles.subtitulo}>{subtitulo}</Text> : null}
    </View>
  );
}

export function FormInput({
  label,
  iconName,
  secureTextEntry,
  ...rest
}: FormInputProps) {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const isPassword = !!secureTextEntry;

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputBox}>
        <Feather
          name={iconName}
          size={18}
          color={colors.borda}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor={colors.bordaSuave}
          secureTextEntry={isPassword && !mostrarSenha}
          {...rest}
        />
        {isPassword ? (
          <TouchableOpacity onPress={() => setMostrarSenha((atual) => !atual)}>
            <Feather
              name={mostrarSenha ? "eye-off" : "eye"}
              size={18}
              color={colors.borda}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

export function FormButton({ texto, onPress, disabled }: FormButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled ? styles.buttonDisabled : null]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{texto}</Text>
      <Feather name="arrow-right" size={18} color={colors.textoInvertido} />
    </TouchableOpacity>
  );
}

export function FormCaption({ texto }: FormCaptionProps) {
  return <Text style={styles.caption}>{texto}</Text>;
}

export function FormLink({ texto, textoDestaque, onPress }: FormLinkProps) {
  return (
    <View style={styles.linkContainer}>
      <Text style={styles.linkTexto}>{texto} </Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.linkDestaque}>{textoDestaque}</Text>
      </TouchableOpacity>
    </View>
  );
}