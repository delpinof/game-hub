import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store.ts";

const GenreList = () => {
    const {data, isLoading, error} = useGenres();
    const genreId = useGameQueryStore(s => s.gameQuery.genreId);
    const setSelectedGenreId = useGameQueryStore(s => s.setGenreId)

    if (isLoading) return <Spinner/>;
    if (error) return null;
    return (<>
            <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
            <List>
                {data.results.map(genre =>
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image
                                boxSize="32px"
                                objectFit="cover"
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)} alt={genre.name}/>
                            <Button
                                whiteSpace="normal"
                                textAlign="left"
                                fontWeight={genre.id === genreId ? "bold" : "normal"}
                                onClick={() => setSelectedGenreId(genre.id)}
                                fontSize="lg"
                                variant="link">
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                )}
            </List>
        </>
    );
}

export default GenreList;