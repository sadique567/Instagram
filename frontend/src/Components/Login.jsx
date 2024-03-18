import React from 'react'
import "../Styles/Login.css"
import Register from './Register'
const Login = () => {
  return (
    <div className='LoginContainer'>
        <h2>Login</h2>
        <div>
            Emai: <input type="email" name='Email' placeholder="example@gamil.com"/>
        </div>
        <div>
           Password: <input type="password" name='Password' placeholder="Admin@123"/>
        </div>
        <button >Submit</button>
        <button className='link'> <a href="#">Register Here</a> </button>
    </div>
  )
}

export default Login
