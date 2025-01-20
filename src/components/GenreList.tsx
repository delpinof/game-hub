import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectedGenre: (genreId: number, genreName:string) => void;
    selectedGenreId: number | null;
}

const GenreList = ({selectedGenreId, onSelectedGenre}: Props) => {
    const {data, isLoading, error} = useGenres();
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
                                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                                onClick={() => onSelectedGenre(genre.id, genre.name)}
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