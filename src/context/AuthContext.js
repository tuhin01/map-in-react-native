import createDataContext from "./createDataContext";
import httpService from "../services/HttpService";
import { AsyncStorage } from "react-native";
import { navigate } from "../nagigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case "signup":
            return { errorMessage: "", token: action.payload };
        case "error":
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};

const signup = dispatch => {
    return async ({ email, password }) => {
        try {
            const response = await httpService.post("/signup", { email, password });
            await AsyncStorage.setItem("token", response.data.token);
            dispatch({ action: "signup", payload: response.data.token });
            navigate("Home");
        } catch (e) {
            dispatch({ type: "error", payload: e.message });
        }
    };
};

const signin = dispatch => {
    return (email, password) => {
        // Make API call to server with email, password
    };
};

const signout = dispatch => {
    return (email, password) => {
        // Make API call to server with email, password
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signup, signout },
    { isLoggedIn: false, errorMessage: "" }
);
