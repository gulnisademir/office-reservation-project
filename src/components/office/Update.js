import axios from 'axios';
import React from 'react'
import { useEffect , useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'


function Update() {

    const {_id} = useParams();

    const [inputData, setInputData] = useState({
        id:_id,
        name: '',
        organization:'',
        createdAt: '',
        updatedAt: ''
        
    })
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://ec2-34-212-0-127.us-west-2.compute.amazonaws.com:3000/api/offices/'+_id)
        .then(res => setInputData(res.data))
        .catch(err => console.log(err))
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://ec2-34-212-0-127.us-west-2.compute.amazonaws.com:3000/api/offices/'+_id , inputData)
        .then(res => {
            alert("Data Updated Successfully!")
            navigate('/home')
        })
    }


  return (
    
        <div className='officeform'>
            <form  onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Office Name:</label>
                    <input type="text" className='form-control' value={inputData.name}
                    onChange={e => setInputData({...inputData, name: e.target.value})}/>
                </div>
                <hr/>
                <div>
                    <label htmlFor="organization">Organization:</label>
                    <input type="text" name='organization' className='form-control' value={inputData.organization}
                    onChange={e => setInputData({...inputData, organization: e.target.value})}/>
                </div>
                <br />
                <button className='btn border-white btn-info'>Update</button>
                
                <Link to="/home"className='btn border-white btn-secondary mx-3'>Cancel</Link>
            </form>
        </div>
    
  )
}

export default Update