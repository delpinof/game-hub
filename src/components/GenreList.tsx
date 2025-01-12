import { List, ListItem, Image, HStack, Button, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
    const { data, loading, error } = useGenres();
    if (loading) return <Spinner />;
    if (error) return null;
    return (<>
        <List>
            {data.map(genre =>
                <ListItem key={genre.id} paddingY="5px">
                    <HStack>
                        <Image
                            boxSize="32px"
                            borderRadius={8}
                            src={getCroppedImageUrl(genre.image_background)} alt={genre.name} />
                        <Button onClick={() => onSelectedGenre(genre)} fontSize="lg" variant="link">{genre.name}</Button>
                    </HStack>
                </ListItem>
            )}
        </List>
    </>
    );
}

export default GenreList;