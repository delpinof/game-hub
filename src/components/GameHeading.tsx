import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres.ts";
import usePlatforms from "../hooks/usePlatforms.ts";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
    const {data:genres} = useGenres();
    const {data:platforms} = usePlatforms();

    const genreName = genres.results.find(genre => genre.id === gameQuery.genreId)?.name|| "";
    const platformName = platforms?.results.find(platform => platform.id === gameQuery.platformId)?.name || "";

    const heading = `${platformName} ${genreName}  Games`;
    return <Heading as="h1" marginY={5} fontSize="5xl">{heading}</Heading>;

}

export default GameHeading;