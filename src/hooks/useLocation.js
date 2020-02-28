import { useEffect, useState } from "react";
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from "expo-location";

export default callback => {
    const [error, setError] = useState(null);

    const startTracking = async () => {
        try {
            await requestPermissionsAsync();

            const subscriber = await watchPositionAsync(
                {
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10,
                },
                callback
            );
        } catch (e) {
            setError(e);
        }
    };

    useEffect(() => {
        startTracking();
    }, []);

    return [error];
};
