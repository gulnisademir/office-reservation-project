import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

function Create() {
    const [inputData, setInputData] = useState({
        name: '',
        email: ''
    })
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3004/offices', inputData)
        .then(res => {
            alert("Data Posted Successfully!")
            navigate('/')
        })
    }
  return (
    
        <div className='officeform'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Office Name:</label>
                    <input type="text" name='name' className='form-control'
                    onChange={e => setInputData({...inputData, name: e.target.value})}/>
                </div>
                <br />
                <button className='btn border-white btn-info'>Create</button>
                
                <Link to="/"className='btn border-white btn-secondary mx-1'>Cancel</Link>
            </form>
        </div>
    
  )
}

export default Create