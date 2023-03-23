import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'



function Home() {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(()=> {
        axios.get('http://localhost:3004/offices')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

  return (
    <div className='officeform '>
        <h2>Offices</h2>
        <Link to="/create" className='btn border-white btn-secondary my-3'>Create Office +</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Office Name</th>
                    
                </tr>
            </thead>
            <tbody>
                {data.map((d, i)=> (
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.name}</td>
                        
                        <td>
                            <Link className='text-decoration-none btn  border-white btn-sm btn-success mx-1' to={`/update/${d.id}`}>Update</Link>
                            <button className='text-decoration-none btn border-white btn-sm btn-danger mx-1' onClick={e => handleDelete(d.id)}>Delete</button>
                            <Link className='text-decoration-none btn border-white btn-sm btn-primary mx-1' to={`/read/${d.id}`}>Read</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  )

  function handleDelete(id) {
    const confirm = window.confirm("Do you like to Delete?");
    if(confirm) {
        axios.delete('http://localhost:3004/offices/'+id)
        .then(res => {
            alert("Record Deleted");
            navigate('/')
        })
    }
  }
}

export default Home
