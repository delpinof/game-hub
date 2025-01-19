import {GameQuery} from "../App";
import gameService, {Game} from "../services/gameService.ts";
import {useQuery} from "@tanstack/react-query";
import {FetchResponse} from "../services/api-client.ts";

const useGames = (gameQuery: GameQuery) => {
    return useQuery<FetchResponse<Game>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: () =>
            gameService.getAll({
                params: {
                    genres: gameQuery.genre?.id,
                    parent_platforms: gameQuery.platform?.id,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText
                }
            }),
        staleTime: 6 * 60 * 60 * 1000,
    });
};

export default useGames;