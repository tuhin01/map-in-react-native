import createDataContext from "./createDataContext";
import httpService from "../services/HttpService";
import {AsyncStorage} from "react-native";
import {navigate} from "../nagigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case "signin":
            return {errorMessage: "", token: action.payload};
        case "signout":
            return {errorMessage: "", token: ""};
        case "error":
            return {...state, errorMessage: action.payload};
        case "clear_error_message":
            return { ...state, errorMessage: "" };
        default:
            return state;
    }
};

const signup = dispatch => {
    return async ({ email, password }) => {
        try {
            const response = await httpService.post("/signup", { email, password });
            await AsyncStorage.setItem("token", response.data.token);
            dispatch({ action: "signin", payload: response.data.token });
            navigate("Home");
        } catch (e) {
            dispatch({ type: "error", payload: e.message });
        }
    };
};

const signin = dispatch => {
    return async ({ email, password }) => {
        try {
            const response = await httpService.post("/signin", { email, password });
            await AsyncStorage.setItem("token", response.data.token);
            dispatch({ action: "signin", payload: response.data.token });
            navigate("Home");
        } catch (e) {
            dispatch({ type: "error", payload: e.message });
        }
    };
};

const autoSignIn = dispatch => async callback => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
        dispatch({type: "signin", payload: token});
        callback();
        navigate("Dashboard");
    } else {
        navigate("Signin");
    }
};

const signout = dispatch => async () => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "signout" });
    console.log("here");
    navigate("Signin");
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: "clear_error_message" });
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signup, signout, autoSignIn, clearErrorMessage },
    { isLoggedIn: false, errorMessage: "" }
);
