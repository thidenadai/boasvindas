import React, { useState } from "react";
import { Text, View, StyleSheet, Button, Modal } from "react-native";

export default function App() {
  const [visible, setVisible] = useState(false);

  visModal = (vis) => {
    if (!visible) {
      setVisible(vis);
    } else {
      setVisible(vis);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Abrir modal" onPress={() => visModal(true)} />
      {/* true or false*/}

      <Modal transparent={false} animationType="fade" visible={visible}>
        <View style={styles.modalalg}>
          <View style={styles.modal1}>
            <Button title="fechar modal" onPress={() => visModal(false)} />
            <Text style={styles.txt}> Thiago </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  modal1: {
    width: "80%",
    height: "80%",
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontSize: 20,
  },
  modalalg: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
