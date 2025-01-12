import { useState, useEffect } from 'react';
import apiClient from "../services/api-client";
import { CanceledError } from 'axios';

interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient.get<FetchGenresResponse>("/genres", { signal: controller.signal })
            .then(res => {
                setGenres(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });
        return () => controller.abort();
    }, []);

    return { genres, loading, error };
};

export default useGenres;