import { useState } from 'react'
import api from '../api'


function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const login = async () => {
        const res = await api.post('/auth/login', {email, password})
        localStorage.setItem("token", res.data.token)
        alert('logged in')
    }
  return (
    <div className="form-container">
        <h2>🔓 Login</h2>
        <input type="email" placeholder='Enter your email' onChange={(e)=>{setEmail(e.target.value)}}  />
        <input type="password" placeholder='Enter your password' onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Login