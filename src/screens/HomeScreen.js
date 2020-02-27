import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";

// This component is purely used as a middleaware between login & logout state
const HomeScreen = () => {
    const { autoSignIn } = useContext(AuthContext);

    useEffect(() => {
        setTimeout(() => {
            autoSignIn();
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            <Button title="Loading button" loading />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default HomeScreen;
