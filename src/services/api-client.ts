import axios from "axios";

export const axiosInterface = axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: "109225ae61e44da799c00fd123512ea3"
    }
})

class ApiClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = () => {
        return axiosInterface.get<T>(this.endpoint)
            .then((res) => res.data);
    }

    post = (data: T) => {
        return axiosInterface.post<T>(this.endpoint, data)
            .then((res) => res.data);
    }

}

export default ApiClient;