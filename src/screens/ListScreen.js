import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const list = [
  { name: "soldier 1", rank: 1 },
  { name: "soldier 2", rank: 2 },
  { name: "soldier 3", rank: 3 },
  { name: "soldier 4", rank: 4 },
  { name: "soldier 5", rank: 5 },
  { name: "soldier 6", rank: 6 },
  { name: "soldier 7", rank: 7 },
  { name: "soldier 8", rank: 8 },
  { name: "soldier 9", rank: 9 },
  { name: "soldier 10", rank: 10 },
];
const ListScreen = () => {
  return (
    <View>
      <Text>List Screen</Text>
      <FlatList
        // horizontal
        // showsHorizontalScrollIndicator
        data={list}
        keyExtractor={(list) => list.name}
        renderItem={({ item }) => {
          return (
            <Text style={styles.ListScreen}>
             Man {item.name} - Rank {item.rank}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ListScreen: {
    fontSize: 10,
    marginVertical: 30,
    textAlign: "center"
  },
});

export default ListScreen;
