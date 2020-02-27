import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const TrackListScreen = ({ navigation }) => {
    navigation.setOptions({ headerLeft: null });

    return (
        <View style={styles.container}>
            <Text>Track List</Text>
            <Button
                title="Track Detail"
                onPress={() => {
                    return navigation.navigate("Trackdetail");
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default TrackListScreen;
