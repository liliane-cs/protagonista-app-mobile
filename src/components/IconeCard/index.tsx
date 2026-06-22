import React from "react";
import { useState } from "react";
import { IconeCardProps } from "./types";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./style";
import { colors } from "../../styles/theme";

export const IconeCard = ({ icon, label, modalText }: IconeCardProps) => {
  const [visivel, setVisivel] = useState(false);
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setVisivel(true)}
      >
        <Ionicons name={icon} size={24} color={colors.vinhoPrincipal} />
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>

      <Modal visible={visivel} transparent animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>{label}</Text>
            <Text style={styles.modalText}>{modalText}</Text>

            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setVisivel(false)}
            >
              <Ionicons name={"close-outline"} size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};
