import { Button, StyleSheet, Text, View } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import React from "react";

const ViewTask = ({ navigation }) => {
  const auth = getAuth();
  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("Logout Successfully");
        navigation.push("Login");
      })
      .catch((error) => {
        // An error happened.
        alert(error);
      });
  };
  return (
    <View style={styles.button} >
      <Button title="Log-out" onPress={logout} />
    </View>
  );
};

export default ViewTask;

const styles = StyleSheet.create({
  button:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
