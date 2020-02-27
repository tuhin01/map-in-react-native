import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = ({ navigation }) => {
    const { state, signout } = useContext(AuthContext);
    const onSignOut = () => {
        signout();
        // navigation.push("signin");
    };
    return (
        <View style={styles.container}>
            <Text>Account</Text>
            <Button title="Logout" onPress={() => onSignOut()} />
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
