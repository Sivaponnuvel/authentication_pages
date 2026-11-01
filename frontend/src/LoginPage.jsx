import React from 'react'

function LoginPage() {
  return (
    <div className='login-container'>
      <form className="login-form">
        <h2>Welcome back</h2>
        
        <div className="form-grid1">
          
          <div className="form-group1">
            <label>Username</label>
            <input type="text" placeholder='Enter username' required/>
          </div>

          <div className="form-group1">
            <label>Password</label>
            <input type="password" placeholder='Enter password' required/>
          </div>

        </div>

        <button className='login-button'>Login</button>

        <p className='register-text'>Dont Have an account? <a href="/register">Register Here</a></p>
      </form>
    </div>
  )
}


export default LoginPage