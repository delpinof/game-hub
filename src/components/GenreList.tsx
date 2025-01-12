import useGenres from "../hooks/useGenres";

const GenreList = () => {
    const { genres, loading, error } = useGenres();
    return (
        <ul>
            {genres.map(genre =>
                <li key={genre.id}>{genre.name}</li>
            )}
        </ul>
    );
}

export default GenreList;