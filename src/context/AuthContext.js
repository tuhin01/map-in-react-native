import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = dispatch => {
    return (email, password) => {
        // Make API call to server with email, password
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

export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signup, signout},
    {isLoggedIn: false}
);
