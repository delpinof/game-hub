import axios, {AxiosRequestConfig} from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

const axiosInterface = axios.create({
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

    getAll = (config: AxiosRequestConfig) => {
        return axiosInterface.get<FetchResponse<T>>(this.endpoint, config)
            .then((res) => res.data);
    }

    post = (data: T) => {
        return axiosInterface.post<T>(this.endpoint, data)
            .then((res) => res.data);
    }

}

export default ApiClient;