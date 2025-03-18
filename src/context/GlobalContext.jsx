import axios from 'axios'
import { createContext, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'


const GlobalContext = createContext();


const GlobalProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({});

    const { id } = useParams();

    const urlShow = `${import.meta.env.VITE_ENDPOINT_URL}/${id}`;
    const url = import.meta.env.VITE_ENDPOINT_URL;


    function fetchMovies() {

        axios.get(url)
            .then(res => setMovies(res.data))
            .catch((error) => { console.log(error) })
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



    const value = {
        movies,
        movie,
        fetchMovie,
        fetchMovies,

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