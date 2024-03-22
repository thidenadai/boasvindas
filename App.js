import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TextInput, Modal } from "react-native";

export default function App() {
  const [name, setName] = useState("");

  changeTxt = (txtInput) => {
    setName(`Seja bem vindo, ${txtInput}`);
  };

  useEffect(() => {
    if (name.length === 26) {
      alert("limite de caracteres");
    }
  }, [name]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputname}
        placeholder="Digite seu nome"
        onChangeText={changeTxt}
      />
      <Text style={styles.boavindanome}>{name}</Text>
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
  inputname: {
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
  },
  boavindanome: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
  },
});
