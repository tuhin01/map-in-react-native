import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AccountScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Account</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center",
    },
});

export default AccountScreen;
