import createDataContext from "./createDataContext";
import httpService from "../services/HttpService";

const trackReducer = (state, action) => {
    switch (action.type) {
        case "get_tracks":
            return action.payload;
        default:
            return state;
    }
};

const createTrack = dispatch => {
    return (name, locations) => {
        try {
            const response = httpService.post("/tracks", { name, locations });
        } catch (e) {
            console.log(e.message);
        }
    };
};

const getTracks = dispatch => async () => {
    try {
        const response = await httpService.get("/tracks");
        dispatch({ type: "get_tracks", payload: response.data });
    } catch (e) {
        console.log(e);
    }
};

export const { Context, Provider } = createDataContext(
    trackReducer,
    { createTrack, getTracks },
    []
);
