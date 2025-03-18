import { useEffect } from 'react'
// import axios from 'axios'
import MovieCard from '../components/MovieCard';
import { useGlobalContext } from '../context/GlobalContext';


export default function HomePage() {
    // const [movies, setMovies] = useState([]);

    // const url = import.meta.env.VITE_ENDPOINT_URL;

    // const fetchMovie = () => {
    //     axios.get(url)
    //         .then(res => setMovies(res.data))
    //         .catch((error) => { console.log(error) })
    // }

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