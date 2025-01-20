import {useQuery} from "@tanstack/react-query";
import platformService, {Platform} from "../services/platformService.ts";
import {CACHE_KEY_PLATFORMS} from "../constants.ts";
import {FetchResponse} from "../services/api-client.ts";
import PLATFORMS from "../data/platforms.ts";
import ms from "ms";


const usePlatforms = () =>
    useQuery<FetchResponse<Platform>, Error>({
        queryKey: CACHE_KEY_PLATFORMS,
        queryFn: platformService.getAll,
        staleTime: ms("24h"),
        initialData: PLATFORMS
    });

export default usePlatforms;