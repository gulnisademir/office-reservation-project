import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'



function Home() {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(()=> {
        axios.get('http://ec2-34-212-0-127.us-west-2.compute.amazonaws.com:3000/api/offices')
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
                        <td>{d._id}</td>
                        <td>{d.name}</td>
                        
                        <td>
                            <Link className='text-decoration-none btn  border-white btn-sm btn-success mx-1' to={`/update/${d._id}`}>Update</Link>
                            <button className='text-decoration-none btn border-white btn-sm btn-danger mx-1' onClick={e => handleDelete(d._id)}>Delete</button>
                            <Link className='text-decoration-none btn border-white btn-sm btn-primary mx-1' to={`/read/${d._id}`}>Read</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  )

  function handleDelete(_id) {
    const confirm = window.confirm("Do you like to Delete?");
    if(confirm) {
        axios.delete('http://ec2-34-212-0-127.us-west-2.compute.amazonaws.com:3000/api/offices/'+_id)
        .then(res => {
            alert("Record Deleted");
            navigate('/')
        })
    }
  }
}

export default Home
