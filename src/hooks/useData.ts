import { useState, useEffect } from 'react';
import {axiosInterface} from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from 'axios';


export interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint:string, requestConfig?:AxiosRequestConfig, deps?:any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        axiosInterface.get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
            .then(res => {
                setData(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });
        return () => controller.abort();
    }, deps ? [...deps]:[]);

    return { data, loading, error };
};

export default useData;