import { CommonActions, StackActions } from "@react-navigation/native";

let navigator;

export const setNavigator = nav => {
    navigator = nav;
};

export const navigate = (routeName, params) => {
    console.log(routeName);
    if (routeName === "Signin") {
        navigator.dispatch(StackActions.replace(routeName));
    } else {
        navigator.dispatch(
            CommonActions.reset({
                routes: [{ name: routeName, params }],
            })
        );
    }
};
