import genreService, {Genre} from "../services/genreService.ts";
import {useQuery} from "@tanstack/react-query";
import {CACHE_KEY_GENRES} from "../constants.ts";
import genres from "../data/genres";
import {FetchResponse} from "../services/api-client.ts";


const useGenres = () => {
    return useQuery<FetchResponse<Genre>, Error>({
        queryKey: CACHE_KEY_GENRES,
        queryFn: genreService.getAll,
        staleTime: 24 * 60 * 60 * 1000,
        initialData: {count: genres.length, results: genres}
    });
};

export default useGenres;