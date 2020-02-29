import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Button, Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailScreen = ({ route, navigation }) => {
    const track = route.params.track;
    const initialTrack = track.locations[0].coords;
    return (
        <SafeAreaView>
            <Spacer>
                <Text h3>{track.name}</Text>
            </Spacer>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                    ...initialTrack,
                }}
            >
                <Polyline coordinates={track.locations.map(loc => loc.coords)} />
            </MapView>
            <Button title="Top Tabs" onPress={() => navigation.navigate("TopTab")} />
            <Spacer />
            <Button title="Bottom Tabs" onPress={() => navigation.navigate("BottomTab")} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    map: {
        height: 300,
    },
});

export default TrackDetailScreen;
