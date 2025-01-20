import {useQuery} from "@tanstack/react-query";
import platformService, {Platform} from "../services/platformService.ts";
import {CACHE_KEY_PLATFORMS} from "../constants.ts";
import {FetchResponse} from "../services/api-client.ts";
import PLATFORMS from "../data/platforms.ts";


const usePlatforms = () =>
    useQuery<FetchResponse<Platform>, Error>({
        queryKey: CACHE_KEY_PLATFORMS,
        queryFn: platformService.getAll,
        staleTime: 24 * 60 * 60 * 1000,
        initialData: PLATFORMS
    });

export default usePlatforms;