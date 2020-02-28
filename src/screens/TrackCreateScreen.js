// import "../_mockLocation";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from "expo-location";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";

const TrackCreateScreen = () => {
    const { addLocation } = useContext(LocationContext);
    const [error, setError] = useState(null);

    const startTracking = async () => {
        try {
            await requestPermissionsAsync();

            // let counter = 0;
            // setInterval(async () => {
            //     await watchPositionAsync(
            //         {
            //             accuracy: Accuracy.BestForNavigation,
            //             timeInterval: 1000,
            //             distanceInterval: 10,
            //         },
            //         location => {
            //             location.coords.latitude = location.coords.latitude + counter * 0.0001;
            //             location.coords.longitude = location.coords.longitude + counter * 0.0001;
            //             console.log(location);
            //         }
            //     );
            //
            //     counter++;
            // }, 1000);

            await watchPositionAsync(
                {
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10,
                },
                location => {
                    addLocation(location);
                }
            );
        } catch (e) {
            setError(e);
        }
    };

    useEffect(() => {
        startTracking();
    }, []);

    return (
        <SafeAreaView>
            <Text h3>Create a Map</Text>
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
