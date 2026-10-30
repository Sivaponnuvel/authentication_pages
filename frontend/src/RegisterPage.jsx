import React, { useState } from 'react';
import axios from 'axios';

function RegisterPage() {
    const[formData, setFormData] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        dob: '',
        gender: '',
        password: '',
        confirm_password: ''
    });

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(formData.password !== formData.confirm_password){
            alert("Passwords do not match");
            return
        }

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/register/",
                {
                    username: formData.username,
                    first_name: formData.first_name,
                    last_name: formData.last_name,
                    email: formData.email,
                    dob: formData.dob,
                    gender: formData.gender,
                    password: formData.password
                }
            );

            alert(response.data.message);
        }
        catch (error){
            if(error.response){
                console.log(error.response.data);
                alert(JSON.stringify(error.response.data));
            }
            else{
                alert("Unable to connect to the server");
            }
        }
    };
  return (
    <div className="register-container">
        <form className='register-form' onSubmit={handleSubmit}>
            <h2>Create <span className="gradient-text">Account</span></h2>
            
            <div className="form-grid">
                <div className="form-group">
                    <label>Username</label>
                    <input name='username' value={formData.username} onChange={handleChange} type="text" placeholder='Enter username' required/>
                </div>
                <div className="form-group">
                    <label>First Name</label>
                    <input name='first_name' value={formData.first_name} onChange={handleChange} type="text" placeholder='Enter first name' required/>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input name='last_name' value={formData.last_name} onChange={handleChange} type="text" placeholder='Enter last name' required/>
                </div>
                <div className="form-group">
                    <label>Email ID</label>
                    <input name='email' value={formData.email} onChange={handleChange} type="email" placeholder='Enter email address' required/>
                </div>
                <div className="form-group">
                    <label>Date of Birth</label>
                    <input name='dob' value={formData.dob} onChange={handleChange} type="date" required/>
                </div>
                <div className='form-group'>
                    <label>Gender</label>
                    <select name='gender' value={formData.gender} onChange={handleChange} required>
                        <option value="" disabled>Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input name='password' value={formData.password} onChange={handleChange} type="password" placeholder="Enter password" required/>
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input name='confirm_password' value={formData.confirm_password} onChange={handleChange} type="password" placeholder="Confirm your password" required/>
                </div>
            </div>
            
            <button type='submit' className='register-button'>Register Now</button>

            <p className='login-text'>Already have an account <a href="/login">Login</a></p>

        </form>
    </div>
  );
}

export default RegisterPage;