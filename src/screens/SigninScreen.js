import React, { useContext } from "react";
import { Button, StyleSheet, View } from "react-native";
import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";

const SigninScreen = ({ navigation }) => {
    const { state, signin } = useContext(AuthContext);

    const onSubmit = ({ email, password }) => {
        signin({ email, password });
    };

    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign In for Trackers"
                errorMessage={state.errorMessage}
                submitButtonText="Sign In"
                onSubmit={onSubmit}
            />
            <Button
                title="Does not have an account? Create one instead"
                onPress={() => navigation.push("Signup")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#fff",
        // alignItems: "center",
        justifyContent: "center",
        marginBottom: 250,
    },
});

export default SigninScreen;
