import ApiClient, {FetchResponse} from "./api-client.ts";

export interface Platform {
    id: number,
    name: string;
    slug: string;
}

export default new ApiClient<FetchResponse<Platform>>("/platforms/lists/parents")
