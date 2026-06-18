import React, { ReactNode } from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./style";

type Variante = "primario" | "outline";

interface ButtonProps {
  children: ReactNode;
  onPress: () => void;
  variante?: Variante;
}

export default function Button({
  children,
  onPress,
  variante = "primario",
}: ButtonProps): ReactNode {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.base, variante === "outline" && styles.outline]}
    >
      {typeof children === "string" ? (
        <Text
          style={[styles.texto, variante === "outline" && styles.textoOutline]}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}