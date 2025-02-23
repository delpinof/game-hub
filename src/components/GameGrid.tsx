import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
    const {
        data,
        //isLoading,
        error,
        fetchNextPage,
        //isFetchingNextPage,
        hasNextPage
    } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6];

    //const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

    //console.log("My data count: ", data?.pages.length || 0);
    //console.log("Mosh data count: ", fetchedGamesCount);

    if (error) return <Text>{error.message}</Text>
    return (
        <InfiniteScroll
            dataLength={data?.pages.length || 0} // using my data count as is more concise than mosh and works fine
            next={fetchNextPage}
            hasMore={!!hasNextPage}
            loader={skeletons.map(skeleton =>
                <GameCardContainer key={skeleton}>
                    <GameCardSkeleton/>
                </GameCardContainer>
            )}
            endMessage={
                <p style={{textAlign: 'center'}}>
                    <b>Yay! You have seen it all</b>
                </p>
            }>
            <SimpleGrid
                columns={{sm: 1, md: 2, lg: 3, xl: 4}}
                padding="10px"
                spacing={6}>
                {data?.pages.map((page, index) =>
                    <React.Fragment key={index}>
                        {page.results.map(game =>
                            <GameCardContainer key={game.id}><GameCard game={game}/></GameCardContainer>
                        )}
                    </React.Fragment>
                )}
            </SimpleGrid>
        </InfiniteScroll>
    )
}

export default GameGrid;