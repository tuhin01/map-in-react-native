import { useContext } from "react";
import { Context as LocationContext } from "../context/LocationContext";
import { Context as TrackContext } from "../context/TrackContext";

export default () => {
    const { createTrack } = useContext(TrackContext);
    const {
        state: { trackName, locations },
    } = useContext(LocationContext);

    const saveTrack = () => {
        createTrack(trackName, locations);
    };

    return [saveTrack];
};
