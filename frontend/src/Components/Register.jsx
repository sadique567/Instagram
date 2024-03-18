import React from 'react'
import "../Styles/Register.css"
import axios from "axios"


const Register = () => {

  const object ={
    email : "",
    password : ""
  }

  return (
    <div className='RegisterContainer'>
        <h1>Registration</h1>
    <div>
        <input onChange={(event)=>{
          object.email = event.target.value;
        }} type="email" name='email' placeholder="example@gamil.com"/>
    </div>
    
    <div>
        <input onChange={(event)=>{
          object.password = event.target.value;
        }}type="password" name='password' placeholder="Admin@123"/>
    </div>
    <button onClick={()=>{
        console.log(object);

        axios.post('http://localhost:3000/user/register', {
         ...object
         
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);

        });
    }}>Registration</button>
    <button className='login'>Login</button>
</div>
  )
}

export default Register
