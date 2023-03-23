import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'

function Read() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [Data, setdata] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3004/offices/'+id)
        .then(res => setdata(res.data))
        .catch(err => console.log(err))
    }, [])

  return (
   
        
            <div className='officeform '>
                <label htmlFor="id">Office ID</label>
                <input type="text" value={Data.id} disabled/>
            {/* <p>{Data.id}</p> */}
            <hr/>
            <label htmlFor="officename">Office Name</label>
            {/* <p>{Data.name}</p> */}
            <input type="text" value={Data.name} disabled/>
            <hr/>
            <Link to="/"className='btn border-white btn-secondary mx-1'>Cancel</Link>
            </div>
    
  )
}

export default Read