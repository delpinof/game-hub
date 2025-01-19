import ApiClient from "./api-client.ts";
import {FetchResponse} from "../hooks/useData.ts"

export interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}


export default new ApiClient<FetchResponse<Genre>>("/genres")