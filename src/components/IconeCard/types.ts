import { Ionicons } from "@expo/vector-icons";

export type IconeCardProps = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  modalText: string;
};
