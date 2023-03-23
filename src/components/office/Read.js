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
   
        
            <div className='container '>
            <p>ID {Data.id}</p>
            <p>Office Name {Data.name}</p>
            
            <Link to="/">Back</Link>
            </div>
    
  )
}

export default Read