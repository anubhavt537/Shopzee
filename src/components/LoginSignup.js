import React from 'react'
import './LoginSignup.css'
export default function LoginSignup() {
  return (
    <div className='loginSignup'>
       <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-field">
          <input type="text"  placeholder='Name...'/>
          <input type="email" placeholder='email...'/>
          <input type="password" placeholder='password...'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account ?<span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name=' ' id='' />
          <p>By continuing , i agree terms of use & privacy policy</p>
        </div>
       </div>
       


    </div>
  )
}
