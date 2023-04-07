import React, { useEffect,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const usenavigate=useNavigate();

  useEffect(()=>{
    sessionStorage.clear();
        },[]);


        const ProceedLogin = (e) => {
          e.preventDefault();
          if (validate()) {
              ///implentation
              // console.log('proceed');
              fetch('http://ec2-34-212-0-127.us-west-2.compute.amazonaws.com:3000/api/sessions/' + email).then((res) => {
                  return res.json();
              }).then((resp) => {
                  //console.log(resp)
                  if (Object.keys(resp).length === 0) {
                      toast.error('Please Enter valid email');
                  } else {
                      if (resp.password === password) {
                          toast.success('Success');
                          sessionStorage.setItem('email',email);
                          sessionStorage.setItem('userrole',resp.role);
                          usenavigate('/')
                      }else{
                          toast.error('Please Enter valid credentials');
                      }
                  }
              }).catch((err) => {
                  toast.error('Login Failed due to :' + err.message);
              });
          }
      }

      const ProceedLoginusingAPI = (e) => {
        e.preventDefault();
        if (validate()) {
            ///implentation
            // console.log('proceed');
            let inputobj={"email": email,
            "password": password};
            fetch("http://ec2-34-212-0-127.us-west-2.compute.amazonaws.com:3000/api/sessions/refresh",{
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(inputobj)
            }).then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp)
                if (Object.keys(resp).length === 0) {
                    toast.error('Login failed, invalid credentials');
                }else{
                     toast.success('Success');
                     sessionStorage.setItem('email',email);
                     sessionStorage.setItem('jwttoken',resp.jwtToken);
                   usenavigate('/')
                }
                // if (Object.keys(resp).length === 0) {
                //     toast.error('Please Enter valid username');
                // } else {
                //     if (resp.password === password) {
                //         toast.success('Success');
                //         sessionStorage.setItem('username',username);
                //         usenavigate('/')
                //     }else{
                //         toast.error('Please Enter valid credentials');
                //     }
                // }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }


    const validate = () => {
      let result = true;
      if (email === '' || email === null) {
          result = false;
          toast.warning('Please Enter Email');
      }
      if (password === '' || password === null) {
          result = false;
          toast.warning('Please Enter Password');
      }
      return result;
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(email);
  // };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={ProceedLogin}>
        <label htmlFor="email">Email <span className="errmsg">*</span></label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="example@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password<span className="errmsg">*</span></label>
        <input
          value={password}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="*************"
          id="password"
          name="password"
        />
        <br/>
         <button type="submit" className="btn btn-primary">Login</button> 
      </form>
      {/* <button
        className="btn btn-primary"
        onClick={() => props.onFormSwitch("register")}
      > */} 
      {/* </button> */}
     
         <hr/>                  
       <Link className="btn btn-success" to={'/register'}>New User</Link>
                       
      <button className="link-btn">Did you forget your password?</button>
    </div>
  );
};
