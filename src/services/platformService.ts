import ApiClient from "./api-client.ts";
import {FetchResponse} from "../hooks/useData.ts"

export interface Platform {
    id: number,
    name: string;
    slug: string;
}

export default new ApiClient<FetchResponse<Platform>>("/platforms/lists/parents")
