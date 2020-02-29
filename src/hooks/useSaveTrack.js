import { useContext } from "react";
import { Context as LocationContext } from "../context/LocationContext";
import { Context as TrackContext } from "../context/TrackContext";
import { navigate } from "../nagigationRef";

export default () => {
    const { createTrack } = useContext(TrackContext);
    const {
        state: { trackName, locations },
        reset,
    } = useContext(LocationContext);

    const saveTrack = async () => {
        await createTrack(trackName, locations);
        reset();
        navigate("Dashboard");
    };

    return [saveTrack];
};
