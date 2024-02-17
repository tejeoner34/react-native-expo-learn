import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import GoalItem from "./GoalItem";

const GoalsList = ({ goalsList, onDeleteGoal }) => {
  const handleDeleteGoal = (goalIndex) => {
    onDeleteGoal(goalIndex);
  };
  return (
    <View style={styles.listContainer}>
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        data={goalsList}
        renderItem={(itemData, index) => (
          <GoalItem
            goalText={itemData.item.text}
            onTapItem={() => handleDeleteGoal(itemData.index)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default GoalsList;

const styles = StyleSheet.create({});
