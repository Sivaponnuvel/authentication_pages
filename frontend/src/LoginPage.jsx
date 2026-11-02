import React, { useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login/",
        formData
      );
      alert(response.data.message)
    } catch (error) {
      if(error.response){
        console.log(error.response.data);
        alert(JSON.stringify(error.response.data.message));
      } else {
        alert("Unable to connect to the server");
      }
    }
  }

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Welcome back</h2>
        
        <div className="form-grid1">
          
          <div className="form-group1">
            <label>Username</label>
            <input name='username'  onChange={handleChange} type="text" placeholder='Enter username' required/>
          </div>

          <div className="form-group1">
            <label>Password</label>
            <input name='password' value={formData.password} onChange={handleChange} type="password" placeholder='Enter password' required/>
          </div>

        </div>

        <button type='submit' className='login-button'>Login</button>

        <p className='register-text'>Dont Have an account? <NavLink to="/">Register Here</NavLink></p>
      </form>
    </div>
  )
}


export default LoginPage