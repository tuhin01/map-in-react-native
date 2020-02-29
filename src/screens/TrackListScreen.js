import React, { useContext, useEffect } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import { useIsFocused } from "@react-navigation/native";
import { ListItem, Text } from "react-native-elements";
import Spacer from "../components/Spacer";

const TrackListScreen = ({ navigation }) => {
    navigation.setOptions({ headerLeft: null });
    const isFocused = useIsFocused();
    const { state, getTracks } = useContext(TrackContext);

    useEffect(() => {
        if (isFocused) {
            getTracks();
        }
    }, [isFocused]);

    return (
        <View style={styles.container}>
            <Spacer>
                <Text style={{ alignSelf: "center" }} h3>
                    Track List
                </Text>
            </Spacer>
            <FlatList
                data={state}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <ListItem chevron title={item.name} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
});

export default TrackListScreen;
