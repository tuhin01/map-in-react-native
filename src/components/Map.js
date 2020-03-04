import React, { useContext } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import MapView, { Circle, Polyline } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
    const {
        state: { currentLocation, locations },
    } = useContext(LocationContext);

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
    }

    const zoomLavel = 0.01;

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: zoomLavel,
                longitudeDelta: zoomLavel,
            }}
            // region={{
            //     ...currentLocation.coords,
            //     latitudeDelta: zoomLavel,
            //     longitudeDelta: zoomLavel,
            // }}
        >
            <Circle
                center={currentLocation.coords}
                radius={30}
                strokeColor="rgba(158, 158,255, 1.0)"
                fillColor="rgba(158, 158,255, 0.3)"
            />
            <Polyline coordinates={locations.map(loc => loc.coords)} />
        </MapView>
    );
};

const styles = StyleSheet.create({
    // map: {
    //     height: 300,
    //     alignSelf: "stretch",
    // },
    map: {
        flex: 1,
        // height: 300,
        marginBottom: 16,
        alignSelf: "stretch",
    },
});

export default Map;
