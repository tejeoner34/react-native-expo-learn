import { Button, Modal, StyleSheet, TextInput, View, Image } from "react-native";
import React, { useState } from "react";

const GoalsInput = ({ onAddGoal, onCancel, visible = false }) => {
  const [currentInputText, setInputText] = useState("");

  const handleInputChange = (inputText) => {
    setInputText(inputText);
  };

  const handleAddGoal = () => {
    onAddGoal(currentInputText);
    setInputText("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Image style={styles.image} source={require("../assets/images/goal.png")} />
          <TextInput
            value={currentInputText}
            placeholder="Add your goals!"
            onChangeText={handleInputChange}
            style={styles.inputElement}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <Button disabled={!currentInputText} title="Add" onPress={handleAddGoal} />
          <Button title="Cancel" onPress={onCancel} color="#542157" />
        </View>
      </View>
    </Modal>
  );
};

export default GoalsInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "space-around",
    gap: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
  },
  inputWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    margin: 8,
  },
  inputElement: {
    borderWidth: 1,
    borderColor: "#cccccc",
    backgroundColor: "#cccccc",
    width: "100%",
    padding: 8,
    color: "#120138",
    fontSize: 20,
    borderRadius: 5,
  },
  buttonsContainer: {
    gap: 20,
    padding: 16,
  },
});
