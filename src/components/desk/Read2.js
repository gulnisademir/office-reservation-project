import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'

function Read2() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [Data, setdata] = useState([])

    useEffect(() => {
        axios.get('http://ec2-34-212-0-127.us-west-2.compute.amazonaws.com:3000/api/desks/' +id)
        .then(res => setdata(res.data))
        .catch(err => console.log(err))
    }, [])

  return (
   
        
            <div className='officeform '>
                <label htmlFor="name">Desk Name:</label>
                <input type="text" value={Data.name} disabled/>
          
            <hr/>
            <label htmlFor="officename">Office Name:</label>
            
            <input type="text" value={Data.office} disabled/>
            <hr/>
            <Link to="/"className='btn border-white btn-secondary mx-1'>Cancel</Link>
            </div>
    
  )
}

export default Read2