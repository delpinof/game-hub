import {useQuery} from "@tanstack/react-query";
import {FetchResponse} from "./useData.ts";
import platformService, {Platform} from "../services/platformService.ts";
import {CACHE_KEY_PLATFORMS} from "../constants.ts";


const usePlatforms = () =>
    useQuery<FetchResponse<Platform>, Error>({
        queryKey: CACHE_KEY_PLATFORMS,
        queryFn: platformService.getAll,
        staleTime: 24 * 60 * 60 * 1000
    });

export default usePlatforms;