import { Link } from 'react-router-dom'

export default function MovieCard({ movie }) {
    const { id, title, author, abstract, image } = movie;

    return (
        <>
            <div className='card mb-4'>
                <img src={image} alt={title} />
                <div className='card-body mb-4'>
                    <h5 className='card-title'>{title}</h5>
                    <span>{author}</span>
                    <p>{abstract}</p>
                    <Link to={`movies/${id}`}>Read More</Link>
                </div>
            </div>
        </>
    )
}