import { List, ListItem, Image, HStack, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";


const GenreList = () => {
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
                        <Text fontSize="lg">{genre.name}</Text>
                    </HStack>
                </ListItem>
            )}
        </List>
    </>
    );
}

export default GenreList;