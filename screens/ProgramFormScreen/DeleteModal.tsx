import React from "react";
import { View, Text } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import { Modal, Portal, Provider } from "react-native-paper";
import theme from "../../theme";

type DeleteModalProps = {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const DeleteModal = ({ visible, onClose, onConfirm }: DeleteModalProps) => {
  return (
    <Portal>
      <Modal visible={visible} onDismiss={onClose}>
        <View
          style={{
            backgroundColor: theme.colors.background,
            padding: 20,
            marginHorizontal: 30,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              marginBottom: 16,
              color: theme.colors.secondary,
            }}
          >
            Confirmer la suppression
          </Text>
          <Text style={{ color: theme.colors.secondary }}>
            Es-tu sûr de vouloir supprimer cette session ?
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 16,
            }}
          >
            <CustomButton onPress={onClose}>Annuler</CustomButton>
            <CustomButton onPress={onConfirm}>Supprimer</CustomButton>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default DeleteModal;
