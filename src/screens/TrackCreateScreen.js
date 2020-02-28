import React, { useContext } from "react";
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = () => {
    const { addLocation } = useContext(LocationContext);
    const [error] = useLocation(location => addLocation(location));
    const isFocused = useIsFocused();
    console.log(isFocused);

    return (
        <SafeAreaView>
            <Text h3>Create a Track</Text>
            <Map />
            {error ? <Text>Please enable location service</Text> : null}
        </SafeAreaView>
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
