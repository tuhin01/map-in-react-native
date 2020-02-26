import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TrackDetailScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>TrackDetailScreen</Text>
            <Button title="Top Tabs" onPress={() => navigation.navigate("TopTab")} />
            <Button title="Bottom Tabs" onPress={() => navigation.navigate("BottomTab")} />
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

export default TrackDetailScreen;
