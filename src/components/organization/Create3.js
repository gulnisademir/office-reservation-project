import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'


function Create3() {
    const [inputData, setInputData] = useState({
        name: '',
        _id: '',
        admin:'' ,
        createdAt:'' ,
        updatedAt:'' 
    })
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://ec2-34-212-0-127.us-west-2.compute.amazonaws.com:3000/api/organizations', inputData)
        .then(res => {
            alert("Data Posted Successfully!")
            navigate('/home3')
        })
    }
  return (
    
        <div className='officeform'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Organization Name:</label>
                    <input type="text" name='name' className='form-control'
                    onChange={e => setInputData({...inputData, name: e.target.value})}/>
                </div>
                <br />
                <div>
                    <label htmlFor="name">Admin:</label>
                    <input type="text" name='name' className='form-control'
                    onChange={e => setInputData({...inputData, admin: e.target.value})}/>
                </div>
                <br />
                <button className='btn border-white btn-info'>Create Organization</button>
                
                <Link to="/home3"className='btn border-white btn-secondary mx-1'>Cancel</Link>
            </form>
        </div>
    
  )
}

export default Create3