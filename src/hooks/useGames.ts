import gameService, {Game} from "../services/gameService.ts";
import {useInfiniteQuery} from "@tanstack/react-query";
import {FetchResponse} from "../services/api-client.ts";
import ms from "ms";
import useGameQueryStore from "../store.ts";

const useGames = () => {
    const gameQuery = useGameQueryStore(s => s.gameQuery)
    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: ({pageParam = 1}) =>
            gameService.getAll({
                params: {
                    genres: gameQuery.genreId,
                    parent_platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page: pageParam,
                }
            }),
        staleTime: ms("24h"),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        }
    });
};

export default useGames;