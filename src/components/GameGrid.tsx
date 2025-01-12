import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
    const { data, error, loading } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6];
    return (<>
        {error && <Text>{error}</Text>}
        {loading && skeletons.map(skeleton => <GameCardContainer key={skeleton}><GameCardSkeleton /></GameCardContainer>)}
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding="10px" spacing={10}>
            {data.map(game =>
                <GameCardContainer key={game.id}><GameCard game={game} /></GameCardContainer>
            )}
        </SimpleGrid>
    </>
    )
}

export default GameGrid;