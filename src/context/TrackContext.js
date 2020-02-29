import createDataContext from "./createDataContext";
import httpService from "../services/HttpService";

const trackReducer = (state, action) => {
    switch (action.type) {
        default:
            return { state };
    }
};

const createTrack = dispatch => {
    return (name, locations) => {
        console.log(locations);
        // try {
        //     const response = httpService.post("/tracks", {});
        // } catch (e) {
        //     console.log(e.message);
        // }
    };
};

const getTracks = dispatch => () => {
    try {
    } catch (e) {
        const response = httpService.get("/tracks");
    }
};

export const { Context, Provider } = createDataContext(
    trackReducer,
    { createTrack, getTracks },
    []
);
