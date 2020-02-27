import React, {useContext, useEffect} from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import {Button} from "react-native-elements";
import AuthForm from "../components/AuthForm";
import {Context as AuthContext} from "../context/AuthContext";

const SignupScreen = ({navigation}) => {
    const {state, signup, clearErrorMessage} = useContext(AuthContext);

    const onSubmit = ({email, password}) => {
        signup({email, password});
    };

    useEffect(() => {
        const listener = navigation.addListener("focus", () => {
            clearErrorMessage();
        });

        return listener;
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <AuthForm
                headerText="Sign Up for Trackers"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={onSubmit}
            />
            <Button
                type="clear"
                title="Already have an account? Sign in instead."
                onPress={() => navigation.pop()}
            />
        </SafeAreaView>
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

export default SignupScreen;
