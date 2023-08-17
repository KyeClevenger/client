import React, { useState, useEffect } from 'react'
import { BrowserRouter, Link, useNavigate, useParams } from 'react-router-dom'
import axios from "axios"


const DashboardPage = () => {
    const [authList, setAuthList] = useState([])
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then(response => setAuthList(response.data))
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/authors/${deleteId}`)
            .then(response => {
                removeFromDom(deleteId);
            })
            .catch(err => console.log(err))
    }

    // letting you delete without needed to refresh the page
    const removeFromDom = (deleteId) => {
        const filteredList = authList.filter((eachAuth, idx) => eachAuth._id !== deleteId)
        setAuthList(filteredList)
    }

    return (
        <div>
            <h1>Favorite Author</h1>
            <p>
                <Link to="/authors/new">Add a new Author </Link>
            </p>
            <h4>We have quotes By:</h4>
            {authList.map((eachAuth, idx) => {
                return (
                    <div key={eachAuth._id}>
                        <h4>{eachAuth.name}</h4>
                        <div>
                            <Link to={`/authors/${eachAuth._id}`}>Details</Link>
                            <button onClick={() => handleDelete(eachAuth._id)} type="button">Delete</button>
                            <button onClick={() => navigate(`/authors/${eachAuth._id}/edit`)} type="button">Edit</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default DashboardPage