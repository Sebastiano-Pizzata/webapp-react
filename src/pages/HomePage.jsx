import { useEffect } from 'react'
import MovieCard from '../components/MovieCard';
import { useGlobalContext } from '../context/GlobalContext';


export default function HomePage() {
    const { movies, fetchMovies } = useGlobalContext();


    const renderMovies = () => {
        return movies.map((movie) => {
            return (
                <div className='col' key={movie.id}>
                    <MovieCard movie={movie} />
                </div>
            )
        })
    }

    useEffect(fetchMovies, []);


    return (
        <>
            <h1 className="text-primary">Movies</h1>
            <h2>Qui andranno i film</h2>
            <div className="row row-cols-3">
                {renderMovies()}
            </div>
        </>
    )
}