import { TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";

export interface FormTitleProps {
  titulo: string;
  subtitulo?: string;
}

export interface FormInputProps extends TextInputProps {
  label: string;
  iconName: keyof typeof Feather.glyphMap;
}

export interface FormButtonProps {
  texto: string;
  onPress: () => void;
  disabled?: boolean;
}

export interface FormCaptionProps {
  texto: string;
}

export interface FormLinkProps {
  texto: string;
  textoDestaque: string;
  onPress: () => void;
}