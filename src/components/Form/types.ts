import { Feather } from "@expo/vector-icons";
import { KeyboardTypeOptions, ViewStyle, TextStyle } from "react-native";

export type TitleProps = {
  children: string;
};

export type SubtitleProps = {
  children: string;
};

export type InputProps = {
  label: string;
  icon: keyof typeof Feather.glyphMap;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  isPassword?: boolean;
  keyboardType?: KeyboardTypeOptions;
  labelColor?: string;
  inputStyle?: ViewStyle;
};

export type LinkProps = {
  children: string;
  onPress?: () => void;
  align?: "left" | "right" | "center";
};

export type ButtonProps = {
  children: string;
  onPress: () => void;
  disabled?: boolean;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
};

export type DividerProps = {
  children?: string;
};

export type RedeSocial = {
  nome: string;
  icone: string;
  onPress?: () => void;
};

export type SocialButtonsProps = {
  redes: RedeSocial[];
};

export type FooterProps = {
  texto: string;
  textoLink: string;
  onPress: () => void;
};