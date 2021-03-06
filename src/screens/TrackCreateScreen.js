import React, { useCallback, useContext } from "react";
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import Spacer from "../components/Spacer";

const TrackCreateScreen = ({ navigation }) => {
    const {
        state: { recording },
        addLocation,
    } = useContext(LocationContext);
    const isFocused = useIsFocused();
    const callback = useCallback(location => addLocation(location, recording), [recording]);
    const [error] = useLocation(isFocused || recording, callback);
    navigation.setOptions({ headerTitle: "Create a Track" });

    return (
        <View style={styles.container}>
            {/*<Text style={{ marginTop: 10 }} h3>*/}
            {/*    Create a Track*/}
            {/*</Text>*/}
            {/*<Spacer />*/}
            <Map />
            {error ? <Text>Please enable location service</Text> : null}
            <TrackForm />
            <Spacer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
});

export default TrackCreateScreen;
