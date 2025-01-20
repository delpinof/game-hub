import genreService, {Genre} from "../services/genreService.ts";
import {useQuery} from "@tanstack/react-query";
import {CACHE_KEY_GENRES} from "../constants.ts";
import GENRES from "../data/genres";
import {FetchResponse} from "../services/api-client.ts";
import ms from "ms";


const useGenres = () => {
    return useQuery<FetchResponse<Genre>, Error>({
        queryKey: CACHE_KEY_GENRES,
        queryFn: genreService.getAll,
        staleTime: ms("24h"),
        initialData: GENRES
    });
};

export default useGenres;