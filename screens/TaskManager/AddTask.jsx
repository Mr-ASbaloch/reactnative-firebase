import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { collection, addDoc, Timestamp, getDocs } from "firebase/firestore";
import { db } from "../../db/config";
import ViewTask from "./ViewTask";

const AddTaskScreen = ({navigation}) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  // Add other necessary state variables for additional task details

  const handleAddTask = async () => {
    // Implement logic to add the task with the provided details

    try {
      const docRef = await addDoc(collection(db, "tasks"), {
        title: taskTitle,
        description : taskDescription
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Task Added Successfully");
      navigation.push('Logout')
      //  ToastAndroid.show("data added ", ToastAndroid.SHORT)
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    // Reset input fields after adding task
    setTaskTitle("");
    setTaskDescription("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Task Title"
        value={taskTitle}
        onChangeText={(text) => setTaskTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Task Description"
        value={taskDescription}
        onChangeText={(text) => setTaskDescription(text)}
        multiline
      />
      {/* Add other input fields for additional task details */}
      <Button title="Add Task" onPress={handleAddTask} />
      
      {/* <ViewTask/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});

export default AddTaskScreen;
