import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const login = () => {
		axios({
			method: 'POST',
			data: {
				username,
				password,
			},
			withCredentials: true,
			url: 'http://localhost:4000/login',
		}).then((res) => console.log(res))
	}

	return (
		<div className='login'>
			<h1>Login</h1>
			<input
				placeholder='username'
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				placeholder='password'
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={login}>Submit</button>
		</div>
	)
}

export default Login
