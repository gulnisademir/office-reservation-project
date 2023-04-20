import axios from 'axios';
import React from 'react'
import { useEffect , useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'


function Update2() {

    const {_id} = useParams();

    const [inputData, setInputData] = useState({
        name: '',
        _id: '',      
  office: '',
  createdAt: '',
  updatedAt: ''
        
    })
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://ec2-34-212-0-127.us-west-2.compute.amazonaws.com:3000/api/desks/'+_id)
        .then(res => setInputData(res.data))
        .catch(err => console.log(err))
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://ec2-34-212-0-127.us-west-2.compute.amazonaws.com:3000/api/desks/'+_id , inputData)
        .then(res => {
            alert("Data Updated Successfully!")
            navigate('/home2')
        })
    }


  return (
    
        <div className='officeform'>
            <form  onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Desk Name:</label>
                    <input type="text" className='form-control' value={inputData.name}
                    onChange={e => setInputData({...inputData, name: e.target.value})}/>
                </div>
                <hr/>
                <div>
                    <label htmlFor="office">Office Name:</label>
                    <input type="text" name='office' className='form-control' value={inputData.office}
                    onChange={e => setInputData({...inputData, office: e.target.value})}/>
                </div>
                <br />
                <button className='btn border-white btn-info'>Update</button>
                
                <Link to="/home2"className='btn border-white btn-secondary mx-3'>Cancel</Link>
            </form>
        </div>
    
  )
}

export default Update2