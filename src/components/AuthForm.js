import React, { useState } from "react";
import Spacer from "./Spacer";
import { Button, Input, Text } from "react-native-elements";

const AuthForm = ({ headerText, errorMessage, submitButtonText, onSubmit }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer>
                <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
            </Spacer>
            {errorMessage ? (
                <Spacer>
                    <Text>{errorMessage}</Text>
                </Spacer>
            ) : null}
        </>
    );
};

export default AuthForm;
