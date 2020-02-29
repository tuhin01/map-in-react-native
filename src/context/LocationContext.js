import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
    switch (action.type) {
        case "add_current_location":
            return { ...state, currentLocation: action.payload };
        case "start_recording":
            return { ...state, recording: true };
        case "stop_recording":
            return { ...state, recording: false };
        case "save_location":
            return { ...state, locations: [...state.locations, action.payload] };
        case "track_name":
            return { ...state, trackName: action.payload };
        case "reset":
            return { ...state, trackName: "", locations: [] };
        default:
            return { state };
    }
};

const startRecording = dispatch => {
    return () => {
        dispatch({ type: "start_recording" });
    };
};

const stopRecording = dispatch => {
    return () => {
        dispatch({ type: "stop_recording" });
    };
};

const addLocation = dispatch => {
    return (location, recording) => {
        dispatch({ type: "add_current_location", payload: location });
        if (recording) {
            dispatch({ type: "save_location", payload: location });
        }
    };
};

const trackName = dispatch => {
    return name => {
        dispatch({ type: "track_name", payload: name });
    };
};

const reset = dispatch => () => {
    dispatch({ type: "reset" });
};

export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation, trackName, reset },
    { trackName: "", recording: false, locations: [], currentLocation: null }
);
