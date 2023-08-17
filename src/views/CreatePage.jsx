import React, {useState} from 'react'
import axios from "axios"
import { useNavigate, Link } from 'react-router-dom'

const CreatePage = () => {
    const [name, setName] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/authors`, {name: name })
            .then(response=>{
                navigate(`/authors`)
            })
            .catch(err=>console.log(err))
    }
    
    return (
    <div>
            <h1>Favorite Author</h1>
            <h4>Add a Author</h4>
        <Link to={`/authors`}>Home</Link>
        <form onSubmit = {handleSubmit} className="form">
        <div>
            <label> Name </label>
            <input type="text" name="name" value={name} onChange={e=>setName(e.target.value)}></input>
            <button> Submit </button>
        </div>
        </form>
    </div>
    )
}

export default CreatePage