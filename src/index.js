import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from "axios";//
// axios.defaults.baseURL='http://ec2-34-212-0-127.us-west-2.compute.amazonaws.com:3000/api/'
import reportWebVitals from './reportWebVitals';

// bootstrap eklendi.
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.headers.common['Authorization']='Bearer '+localStorage.getItem('accessToken'); 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
