import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import ReviewCard from '../components/ReviewCard'


export default function MoviePage() {

    const { id } = useParams();
    const [movie, setMovie] = useState({});

    const url = `${import.meta.env.VITE_ENDPOINT_URL}/${id}`;

    const fetchMovie = () => {
        axios.get(url)
            .then(res => {
                console.log(res.data);
                setMovie(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(fetchMovie, [id])

    const renderReview = () => {
        return movie.reviews?.map((review) => {
            return <ReviewCard key={review.id} review={review} />
        })
    }


    return (
        <>
            <h1 className="text-primary">{movie.title}</h1>
            <img src={movie.image} alt={movie.title} />
            <section>
                <h4>Recensioni della Community</h4>
                {renderReview()}
            </section>
        </>
    )
}