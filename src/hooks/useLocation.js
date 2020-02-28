import { useEffect, useState } from "react";
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from "expo-location";

export default (shouldTrack, callback) => {
    const [error, setError] = useState(null);

    useEffect(() => {
        let subscriber;
        const startTracking = async () => {
            try {
                await requestPermissionsAsync();

                subscriber = await watchPositionAsync(
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

        if (shouldTrack) {
            startTracking();
        } else {
            if (subscriber) {
                subscriber.remove();
            }
            subscriber = null;
        }
        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        };
    }, [shouldTrack, callback]);

    return [error];
};
