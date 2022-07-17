import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';

export default function Login() {
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const [success , setSuccess] = useState(false)
    const handleSubmit = (e => {
        e.preventDefault()
        try {
            const response = axios.post('http://127.0.0.1:8000/accounts/login',
            JSON.stringify({ username , password}),
            {
                headers: { 'Content-Type':'application/json' },
                withCredentials: true
            }
            )
            localStorage.setItem('username',username)
            localStorage.setItem('password',password)
            console.log(JSON.stringify(response?.data))
            console.log(JSON.stringify(response))
            setUsername('')
            setPassword('')
            setSuccess(true)
        }
        catch (err) {
            console.log(err)
        }
        })
  return (
    <>
    {success ? (
        <div>
            <h1 className='m-5'>You are logged in!</h1>
            <br/>
            <p>
                <Button className='btn btn-info' href='/'>Go To Home</Button>
            </p>
        </div>
    ) : (
    <div>
        <h1 className='m-5'>Sign-in</h1>
      <InputGroup className="mb-3 mt-5">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          className='bg-dark text-warning'
          onChange={(e)=>setUsername(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3 mt-1">
        <Form.Control
          type='password'
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
          className='bg-dark text-warning'
          onChange={(e)=>setPassword(e.target.value)}
        />
      </InputGroup>
      <Button onClick={handleSubmit} className='btn btn-danger'>Sign-in</Button>
    </div>
    )}
    </>
  )
}
