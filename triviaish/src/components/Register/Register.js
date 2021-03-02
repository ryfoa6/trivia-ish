import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const register = () => {
		axios({
			method: 'POST',
			data: {
				username,
				password,
			},
			withCredentials: true,
			url: 'http://localhost:4000/register',
		}).then((res) => console.log(res))
	}

	return (
		<div className='register'>
			<h1>Register</h1>
			<input
				placeholder='username'
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				placeholder='password'
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={register}>Submit</button>
		</div>
	)
}

export default Register
