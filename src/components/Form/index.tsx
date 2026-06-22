import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";

import { estilos, cores } from "./style";
import {
  TitleProps,
  SubtitleProps,
  InputProps,
  LinkProps,
  ButtonProps,
  DividerProps,
  SocialButtonsProps,
  FooterProps,
} from "./types";

const Title = ({ children }: TitleProps) => {
  return <Text style={estilos.titulo}>{children}</Text>;
};

const Subtitle = ({ children }: SubtitleProps) => {
  return <Text style={estilos.subtitulo}>{children}</Text>;
};

const Input = ({
  label,
  icon,
  placeholder,
  value,
  onChangeText,
  isPassword = false,
  keyboardType = "default",
  labelColor,
  inputStyle,
}: InputProps) => {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <View style={estilos.campo}>
      {label ? (
        <Text style={[estilos.label, labelColor ? { color: labelColor } : {}]}>
          {label}
        </Text>
      ) : null}

      <View style={[estilos.inputContainer, inputStyle]}>
        <Feather name={icon} size={18} color={cores.icone} />

        <TextInput
          style={estilos.input}
          placeholder={placeholder}
          placeholderTextColor={cores.placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !mostrarSenha}
          keyboardType={keyboardType}
        />

        {isPassword && (
          <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
            <Feather
              name={mostrarSenha ? "eye" : "eye-off"}
              size={18}
              color={cores.icone}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const Link = ({ children, onPress, align = "right" }: LinkProps) => {
  const alinhamento =
    align === "right" ? "flex-end" : align === "left" ? "flex-start" : "center";

  return (
    <TouchableOpacity onPress={onPress} style={{ alignSelf: alinhamento }}>
      <Text style={estilos.link}>{children}</Text>
    </TouchableOpacity>
  );
};

const Button = ({
  children,
  onPress,
  disabled,
  buttonStyle,
  textStyle,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        estilos.botao,
        disabled && estilos.botaoDesabilitado,
        buttonStyle,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[estilos.textoBotao, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

const Divider = ({ children = "ou entre com" }: DividerProps) => {
  return (
    <View style={estilos.divisor}>
      <View style={estilos.linhaDivisor} />
      <Text style={estilos.textoDivisor}>{children}</Text>
      <View style={estilos.linhaDivisor} />
    </View>
  );
};

const SocialButtons = ({ redes }: SocialButtonsProps) => {
  return (
    <View style={estilos.iconesSociais}>
      {redes.map((rede) => (
        <TouchableOpacity
          key={rede.nome}
          style={estilos.iconeSocial}
          onPress={rede.onPress}
        >
          <FontAwesome name={rede.icone} size={20} color={cores.icone} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const Footer = ({ texto, textoLink, onPress }: FooterProps) => {
  return (
    <View style={estilos.linhaRodape}>
      <Text style={estilos.textoRodape}>{texto} </Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={estilos.linkRodape}>{textoLink}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const Form = {
  Title,
  Subtitle,
  Input,
  Link,
  Button,
  Divider,
  SocialButtons,
  Footer,
};
