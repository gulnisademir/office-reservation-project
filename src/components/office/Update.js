import axios from 'axios';
import React from 'react'
import { useEffect , useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'


function Update() {

    const {id} = useParams();

    const [inputData, setInputData] = useState({
        id: id,
        name: '',
        
    })
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3004/offices/'+id)
        .then(res => setInputData(res.data))
        .catch(err => console.log(err))
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:3004/offices/'+id , inputData)
        .then(res => {
            alert("Data Updated Successfully!")
            navigate('/')
        })
    }


  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">ID:</label>
                    <input type="number" disabled name='id' className='form-control' value={inputData.id}
                    />
                </div>
                <div>
                    <label htmlFor="name">Office Name:</label>
                    <input type="text" name='name' className='form-control' value={inputData.name}
                    onChange={e => setInputData({...inputData, name: e.target.value})}/>
                </div>
                <br />
                <button className='btn btn-info'>Update</button>
                <br />
                <Link to="/">Back</Link>
            </form>
        </div>
    </div>
  )
}

export default Update