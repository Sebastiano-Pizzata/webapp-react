import axios from 'axios'
import { useState } from 'react'


export default function ReviewForm({ movie_id, reloadReviews }) {
    const urlStore = `${import.meta.env.VITE_ENDPOINT_URL}/${movie_id}/reviews`

    const initialValue = {
        name: 'Anonimo',
        text: 'lorem ipsum dolor',
        vote: 4
    };

    const [formData, setFormData] = useState(initialValue);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(urlStore, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                setFormData(initialValue);
                reloadReviews()
            })
            .catch((err) => console.log(err))
    }

    const setFieldValue = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <>
            <div className='card'>
                <div className='card-body'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label>Name</label>
                            <input type="text" name='name' className='form-control' value={formData.name} onChange={setFieldValue} />
                        </div>
                        <div className='form-group'>
                            <label>Text</label>
                            <input type="text" name='text' className='form-control' value={formData.text} onChange={setFieldValue} />
                        </div>
                        <div className='form-group'>
                            <label>Vote</label>
                            <input type="number" name='vote' min={1} max={5} className='form-control' value={formData.vote} onChange={setFieldValue} />
                        </div>
                        <div>
                            <button type='submit' className='btn btn-primary'>
                                Crea Recensione
                            </button>
                        </div>

                    </form>

                </div>

            </div>

        </>
    )
}