import ApiClient from "./api-client.ts";

export interface Platform {
    id: number,
    name: string;
    slug: string;
}

export default new ApiClient<Platform>("/platforms/lists/parents")
