import React from "react";
import { useState } from "react";
import { TextInput, Button, View, StyleSheet } from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={goalInputHandler}
        placeholder="Add course goal"
        style={styles.textInput}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler}></Button>
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: "1",
    borderBottomColor: "#cccccc",
  },
});
