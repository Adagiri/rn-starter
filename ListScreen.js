import React from "react";
import { View, Text, StyleSheet} from "react-native";

const ListScreen = () => {
    return (

        <View>
            <Text style={styles.ListScreen}>List Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ListScreen: {
        fontSize: "10px"
    }
})

export default ListScreen