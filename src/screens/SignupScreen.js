import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { StackActions } from "@react-navigation/native";

const SignupScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Sign Up</Text>
            <Button
                title="Sign In"
                onPress={() => navigation.dispatch(StackActions.replace("Signin"))}
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

export default SignupScreen;
