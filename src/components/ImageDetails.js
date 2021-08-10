import React from "react";
import { View, Text, Image, StyleSheet} from "react-native";


const ImageDetails = (props) => {
console.log("ImageDetails-Props",props);
    return <View>
        <Text>{props.title}</Text>
    </View>
}

const styles = StyleSheet.create({

});

export default ImageDetails;