import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterPage from "./screens/Register/RegisterPage";
import LoginScreen from "./screens/Login/LoginScreen";
import AddTaskScreen from "./screens/TaskManager/AddTask";
import ViewTask from "./screens/TaskManager/ViewTask";
// import Google from "./components/google";

export default function App() {
  const stack = createNativeStackNavigator()
  
  return (
    
    <NavigationContainer>
    <stack.Navigator>
      <stack.Screen name="Login" component={LoginScreen}/>
      <stack.Screen name="Register" component={RegisterPage}/>
      <stack.Screen name="Add Task" component={AddTaskScreen}/>
      <stack.Screen name="Logout" component={ViewTask}/>
    </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
