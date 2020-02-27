import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { StackActions } from "@react-navigation/native";

const SigninScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Sign In</Text>
            <Button
                title="Sign Up"
                // onPress={() => navigation.dispatch(StackActions.replace("Signup"))}
                onPress={() => navigation.push("Signup")}
                // onPress={() => navigation.navigate("Signup")}
            />
            <Button title="Home" onPress={() => navigation.replace("Home")} />
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

export default SigninScreen;
