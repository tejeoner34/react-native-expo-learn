import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const GoalItem = ({ goalText, onTapItem }) => {
  const handleRemoveItem = () => {
    onTapItem();
  };
  return (
    <View style={styles.listItem}>
      <Pressable
        android_ripple={styles.activeButtonAndroid} // Para Android
        style={({ pressed }) => pressed && styles.activeButton} // este es para IOS
        onPress={handleRemoveItem}
      >
        <Text style={styles.listItemText}>{goalText}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "blue",
    borderRadius: 5,
    margin: 5,
  },
  listItemText: {
    color: "white",
    padding: 5,
  },
  activeButton: {
    color: "red",
  },
  activeButtonAndroid: {
    color: "purple",
  },
});
