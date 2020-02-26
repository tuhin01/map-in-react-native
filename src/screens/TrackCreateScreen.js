import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TrackCreateScreen = () => {
    return (
        <View style={styles.container}>
            <Text>TrackCreateScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default TrackCreateScreen;
