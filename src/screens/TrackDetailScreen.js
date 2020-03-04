import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Button, Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailScreen = ({ route, navigation }) => {
    const track = route.params.track;
    const initialTrack = track.locations[0].coords;
    navigation.setOptions({ headerTitle: track.name });
    return (
        <View style={styles.container}>
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});

export default TrackDetailScreen;
