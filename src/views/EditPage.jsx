import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from "axios"

const EditPage = () => {
    const [name, setName] = useState("")

    const navigate = useNavigate()

    const {id} = useParams()

    const handleDelete = ()=>{
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(response => navigate(`/authors`))
            .catch(err=>console.log(err))
    }


    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(response => {
                // Prepopulate form info
                console.log(response.data) 
                const prod = response.data
                setName(prod.name)
            })
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.patch(`http://localhost:8000/api/authors/${id}`, {name: name})
            .then(response=>{
                navigate(`/authors`)
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h1>Favorite Author</h1>
            <form onSubmit = {handleSubmit} className="form">
            <div>
                <Link to={`/authors`}>Home</Link>
                <h4>Edit This Author</h4>
                <label> Name </label>
                <input type="text" name="name" value={name} onChange={e=>setName(e.target.value)}></input>
                <button type="button" onClick={handleSubmit}>Submit</button>
                <button type="button" onClick={handleDelete}>Delete</button>
            </div>
            </form>
        </div>
        )
}

export default EditPage