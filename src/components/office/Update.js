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
    
        <div className='officeform'>
            <form  onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">ID:</label>
                    <input type="number" disabled name='id' className='form-control' value={inputData.id}
                    />
                </div>
                <hr/>
                <div>
                    <label htmlFor="name">Office Name:</label>
                    <input type="text" name='name' className='form-control' value={inputData.name}
                    onChange={e => setInputData({...inputData, name: e.target.value})}/>
                </div>
                <br />
                <button className='btn border-white btn-info'>Update</button>
                
                <Link to="/"className='btn border-white btn-secondary mx-3'>Cancel</Link>
            </form>
        </div>
    
  )
}

export default Update