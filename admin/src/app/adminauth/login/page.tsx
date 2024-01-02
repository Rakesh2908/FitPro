"use client"
import React from 'react'
import '../auth.css'
import { ToastContainer, toast } from 'react-toastify'
import { useState } from 'react'



const SignupPage = () => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = async () => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      })
  
  
      if(response.ok) {
        const data = await response.json()
        console.log('Admin login successful', data);
        toast.success("Admin login successful", { 
          position: toast.POSITION.TOP_CENTER
        });      
        window.location.href = '/pages/addworkout'
      }
  
      else {
        console.error('Admin registration failed', response.statusText)
        toast.error('Admin registration failed', {
          position: toast.POSITION.TOP_CENTER
        })
      }
    }

    catch(error) {
      toast.error('An error occured during registration')
      console.error('Error:', error)
    }
  }

  return (
    <div className='formpage'>
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  )
}

export default SignupPage