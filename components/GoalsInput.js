import { Button, Modal, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";

const GoalsInput = ({ onAddGoal, visible = false }) => {
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
          <TextInput
            value={currentInputText}
            placeholder="Add your goals!"
            onChangeText={handleInputChange}
            style={styles.inputElement}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <Button disabled={!currentInputText} title="Add" onPress={handleAddGoal} />
          <Button title="Cancel" onPress={handleAddGoal} />
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
  },
  inputWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputElement: {
    borderColor: "red",
    borderWidth: 2,
  },
  buttonsContainer: {
    gap: 20,
    padding: 16,
  },
});
