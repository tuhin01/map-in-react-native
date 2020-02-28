import axios from "axios";

const httpService = axios.create({
    baseURL: "http://localhost:3005/",
});

export default httpService;
