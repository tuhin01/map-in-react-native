import React from "react";
import { FontAwesome } from "@expo/vector-icons";
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
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";
import { setNavigator } from "./src/nagigationRef";
import HomeScreen from "./src/screens/HomeScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

class App extends React.Component {
    BottomTabNavigator = () => {
        return (
            <MaterialBottomTabs.Navigator
                initialRouteName="Tracklist"
                // activeColor="#f0edf6"
                // inactiveColor="#3e2465"
                // labelStyle={{ fontSize: 14 }}
                // barStyle={{ backgroundColor: "tomato" }}
            >
                <MaterialTopTabs.Screen
                    name="Tracklist"
                    component={TrackListScreen}
                    options={{
                        tabBarLabel: "Tracks",
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="th-list" color={color} size={20} />
                        ),
                    }}
                />
                <MaterialTopTabs.Screen
                    name="Trackcreate"
                    component={TrackCreateScreen}
                    options={{
                        tabBarLabel: "Add Track",
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="plus" color={color} size={20} />
                        ),
                    }}
                />
                <MaterialTopTabs.Screen
                    name="Account"
                    component={AccountScreen}
                    options={{
                        tabBarLabel: "Settings",
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="gear" color={color} size={20} />
                        ),
                    }}
                />
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
                <TrackProvider>
                    <LocationProvider>
                        <NavigationContainer ref={navigator => setNavigator(navigator)}>
                            <Stack.Navigator
                                screenOptions={{
                                    headerStyle: {
                                        backgroundColor: "#3865ff",
                                    },
                                    headerTintColor: "#fff",
                                    headerTitleStyle: {
                                        fontWeight: "bold",
                                    },
                                }}
                                initialRouteName="Home"
                            >
                                <Stack.Screen
                                    name="Home"
                                    component={HomeScreen}
                                    options={{ headerShown: false }}
                                />
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
                                <Stack.Screen
                                    name="Dashboard"
                                    options={{ headerTitle: "Tracks" }}
                                    component={this.DrawerNavigator}
                                />
                                <Stack.Screen name="Trackdetail" component={TrackDetailScreen} />
                                <Stack.Screen name="TopTab" children={this.TopTabNavigator} />
                            </Stack.Navigator>
                        </NavigationContainer>
                    </LocationProvider>
                </TrackProvider>
            </AuthProvider>
        );
    }
}

export default App;
