import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

const useGenres = () => ({data: genres, loading: false, error:null})

export default useGenres;