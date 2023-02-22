import React from 'react'
import './Login.css'
import { useState } from "react";

const Login = () => {
    const [data,setData] = useState({
        username:"",
        password:""
    });

    const {username,password} = data;

    const changeHandler = e => {
      setData({...data,[e.target.name]:[e.target.value]});
    }
    
    const submitHandler = e => {
      e.preventDefault();
      console.log(data);
    }

  return (
    <>
            <div className='login-container'>
            <div className='login-img'></div>
            <form className='login-form'>
                <h1>Login</h1>
                <input className='uname' type="text" name="username" value={username} />
                <br />
                <input className='pwd' type="password" name="password" value={password} />
            </form>
            </div>
    </>
  )
}

export default Login