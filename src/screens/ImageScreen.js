import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = (props) => {
  console.log("ImageScreen-Props", props);
  return (
    <View>
      <ImageDetails title="Forest" />
      <ImageDetails title="Beach" />
      <ImageDetails title="Mountain" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
