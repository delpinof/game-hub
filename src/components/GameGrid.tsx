import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import {GameQuery} from "../App";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({gameQuery}: Props) => {
    const {data, isLoading, error} = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return <Text>{error.message}</Text>
    return (<>

            {isLoading && skeletons.map(skeleton =>
                <GameCardContainer key={skeleton}>
                    <GameCardSkeleton/>
                </GameCardContainer>
            )}

            <SimpleGrid
                columns={{sm: 1, md: 2, lg: 3, xl: 4}}
                padding="10px"
                spacing={6}>
                {data?.results.map(game =>
                    <GameCardContainer key={game.id}><GameCard game={game}/></GameCardContainer>
                )}
            </SimpleGrid>
        </>
    )
}

export default GameGrid;