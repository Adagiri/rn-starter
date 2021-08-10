import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const navigate = navigation.navigate;
  return (
    <View>
      <Text style={styles.text}>Hello, welcome</Text>
      <Button
        title="Go to Components Page"
        onPress={() => {
          navigate("Components");
        }}
      />
      <Button
        title="Go to Lists Page"
        onPress={() => {
          navigate("Lists");
        }}
      />
      <Button
        title="Go to Images Page"
        onPress={() => {
          navigate("Images");
        }}
      />
      <TouchableOpacity onPress={() => navigate("Lists")}>
        <Text>Go to List Page</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    textAlign: "center",
  },
});

export default HomeScreen;
