import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
    const { state, startRecording, stopRecording, trackName } = useContext(LocationContext);

    console.log(state.locations.length);

    const recordButtonRender = () => {
        if (!state.recording) {
            return <Button title="Start Recording" onPress={() => startRecording()} />;
        } else {
            return <Button title="Stop" onPress={() => stopRecording()} />;
        }
    };
    return (
        <>
            <Spacer />
            <Input
                placeholder="Enter a track name"
                onChangeText={trackName}
                value={state.trackName}
            />
            <Spacer />
            {recordButtonRender()}
        </>
    );
};

const styles = StyleSheet.create({});

export default TrackForm;
