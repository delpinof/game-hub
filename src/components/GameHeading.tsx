import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
    const heading = `${gameQuery.platformName || ""} ${gameQuery.genreName || ""}  Games`;
    return <Heading as="h1" marginY={5} fontSize="5xl">{heading}</Heading>;

}

export default GameHeading;