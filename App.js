import React from "react";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import AccountScreen from "./src/screens/AccountScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/nagigationRef";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

class App extends React.Component {
    BottomTabNavigator = () => {
        return (
            <MaterialBottomTabs.Navigator
                initialRouteName="Tracklist"
                activeColor="#f0edf6"
                inactiveColor="#3e2465"
                labelStyle={{ fontSize: 14 }}
                barStyle={{ backgroundColor: "tomato" }}
            >
                <MaterialTopTabs.Screen
                    name="Tracklist"
                    component={TrackListScreen}
                    options={{
                        tabBarLabel: "Home",
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <MaterialTopTabs.Screen name="Trackcreate" component={TrackCreateScreen} />
                <MaterialTopTabs.Screen name="Account" component={AccountScreen} />
            </MaterialBottomTabs.Navigator>
        );
    };

    TopTabNavigator = () => {
        return (
            <MaterialTopTabs.Navigator>
                <MaterialTopTabs.Screen name="Signin" component={SigninScreen} />
                <MaterialTopTabs.Screen name="Signup" component={SignupScreen} />
            </MaterialTopTabs.Navigator>
        );
    };

    DrawerNavigator = () => {
        return (
            <Drawer.Navigator>
                <Drawer.Screen name="BottomTab" component={this.BottomTabNavigator} />
                <Drawer.Screen name="Trackcreate" component={TrackCreateScreen} />
                <Drawer.Screen name="Account" component={AccountScreen} />
            </Drawer.Navigator>
        );
    };

    render() {
        return (
            <AuthProvider>
                <NavigationContainer ref={navigator => setNavigator(navigator)}>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: {
                                backgroundColor: "#f4511e",
                            },
                            headerTintColor: "#fff",
                            headerTitleStyle: {
                                fontWeight: "bold",
                            },
                        }}
                    >
                        <Stack.Screen
                            name="Signin"
                            component={SigninScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Signup"
                            component={SignupScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen name="Home" component={this.DrawerNavigator} />
                        <Stack.Screen name="Trackdetail" component={TrackDetailScreen} />
                        <Stack.Screen name="TopTab" children={this.TopTabNavigator} />
                    </Stack.Navigator>
                </NavigationContainer>
            </AuthProvider>
        );
    }
}

export default App;
