import React from 'react';

function RegisterPage() {
  return (
    <div className="register-container">
        <form className='register-form'>
            <h2>Create <span className="gradient-text">Account</span></h2>
            
            <div className="form-grid">
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" placeholder='Enter username' required/>
                </div>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder='Enter first name' required/>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder='Enter last name' required/>
                </div>
                <div className="form-group">
                    <label>Email ID</label>
                    <input type="email" placeholder='Enter email address' required/>
                </div>
                <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="date" required/>
                </div>
                <div className='form-group'>
                    <label>Gender</label>
                    <select defaultValue="" required>
                        <option value="" disabled>Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" required/>
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm your password" required/>
                </div>
            </div>
            
            <button type='submit' className='register-button'>Register Now</button>

            <p className='login-text'>Already have an account <a href="/login">Login</a></p>

        </form>
    </div>
  );
}

export default RegisterPage;