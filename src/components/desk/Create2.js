import axios from 'axios';
import React from 'react'


import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

function Create2() {
    const [inputData, setInputData] = useState({
        name: '',
        _id: '',      
  office: '',
  createdAt: '',
  updatedAt: ''
    })
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://ec2-34-212-0-127.us-west-2.compute.amazonaws.com:3000/api/desks', inputData)
        .then(res => {
            alert("Data Posted Successfully!")
            navigate('/home2')
        })
    }
  return (
    
        <div className='officeform'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Desk Name:</label>
                    <input type="text" name='name' className='form-control'
                    onChange={e => setInputData({...inputData, name: e.target.value})}/>
                </div>
                <br />

                {/* //////////////////////////// buraya bakkkkkkkk */}
                <div>
                    <label htmlFor="officename">Office Name:</label>
                    <input type="text" name='officename' className='form-control'
                    onChange={e => setInputData({...inputData, office: e.target.value})}/>
                </div>
                <br />
                <button className='btn border-white btn-info'>Create</button>
                
                <Link to="/home2"className='btn border-white btn-secondary mx-1'>Cancel</Link>
            </form>
        </div>
    
  )
}

export default Create2