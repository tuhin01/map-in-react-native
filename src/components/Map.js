import React, { useContext } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import MapView, { Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
    const {
        state: { currentLocation },
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
            {/*<Polyline coordinates={points} />*/}
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300,
    },
});

export default Map;
