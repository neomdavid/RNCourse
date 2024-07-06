import { StyleSheet } from "react-native";
import { View, Text, Pressable } from "react-native";
function GoalItem(props) {
  return (
    <Pressable
      android_ripple={{ color: "#dddddd" }}
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#5e0acc",
    margin: 8,
    padding: 8,
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
  },
});
