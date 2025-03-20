import axios from 'axios'
import { createContext, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'


const GlobalContext = createContext();


const GlobalProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false)

    const { id } = useParams();

    const urlShow = `${import.meta.env.VITE_ENDPOINT_URL}/${id}`;
    const url = import.meta.env.VITE_ENDPOINT_URL;


    function fetchMovies() {
        setIsLoading(true)

        axios.get(url)
            .then(res => setMovies(res.data))
            .catch((error) => { console.log(error) })
            .then(() => setIsLoading(false))
    }

    function fetchMovie() {
        axios.get(urlShow)
            .then(res => {
                console.log(res.data);
                setMovie(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    // Loader logic




    const value = {
        movies,
        movie,
        fetchMovie,
        fetchMovies,
        isLoading,
        setIsLoading
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext)

export {
    GlobalProvider,
    useGlobalContext
}