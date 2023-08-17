import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from "axios"

const DetailsPage = () => {
    const [author, setAuthor] = useState()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(response => setAuthor(response.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h1>Favorite Author</h1>
            {
                author ?
                    <div>
                        <div>
                        <Link to={`/authors`}>Home</Link>
                        <h4>Author Details:</h4>
                            <h4>{author.name}</h4>
                            <Link to={`/authors/${id}/edit`}>Edit</Link>
                        </div>
                    </div> :
                    <h5>Loading...</h5>
            }
        </div>
    )
}

export default DetailsPage