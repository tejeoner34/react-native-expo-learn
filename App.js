import { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import GoalsInput from "./components/GoalsInput";
import GoalsList from "./components/GoalsList";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [showInputModal, setShowInputModal] = useState(false);
  const [goalsList, setGoalsList] = useState([]);

  function addGoalToList(newGoal) {
    setGoalsList((oldList) => [...oldList, { text: newGoal, id: Math.random().toString() }]);
  }

  function handleDeleteGoal(goalIndex) {
    setGoalsList((oldList) => {
      oldList.splice(goalIndex, 1);
      return [...oldList];
    });
  }

  function handleInputModalVisibility() {
    setShowInputModal(!showInputModal);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.listContainer}>
          <GoalsList goalsList={goalsList} onDeleteGoal={handleDeleteGoal} />
        </View>
        <GoalsInput
          visible={showInputModal}
          onAddGoal={addGoalToList}
          onCancel={handleInputModalVisibility}
        />
        <Button title="Add goal..." onPress={handleInputModalVisibility} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    justifyContent: "space-between",
    flex: 1,
    padding: 8,
    paddingTop: 30,
    paddingBottom: 16,
  },
  listContainer: {
    flex: 1,
  },
});
