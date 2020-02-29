import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
    const { state, startRecording, stopRecording, trackName } = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();

    console.log(state.locations.length);

    const recordButtonRender = () => {
        if (!state.recording) {
            return <Button title="Start Recording" onPress={() => startRecording()} />;
        } else {
            return <Button title="Stop" onPress={() => stopRecording()} />;
        }
    };

    const renderSaveButton = () => {
        if (!state.recording && state.locations.length) {
            return <Button title="Save" onPress={() => saveTrack(trackName, state.locations)} />;
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
            <Spacer />
            {renderSaveButton()}
        </>
    );
};

const styles = StyleSheet.create({});

export default TrackForm;
