import axios from "axios";
import { AsyncStorage } from "react-native";

const httpService = axios.create({
    baseURL: "http://localhost:3005/",
});

httpService.interceptors.request.use(
    /* Called on success */
    async config => {
        const token = await AsyncStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    /* Called on failur */
    error => {
        return Promise.reject(error);
    }
);

export default httpService;
