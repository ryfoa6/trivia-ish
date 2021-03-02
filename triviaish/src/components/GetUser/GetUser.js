import React from 'react'
import axios from 'axios'

const GetUser = () => {
	const getUser = () => {
		axios({
			method: 'GET',
			withCredentials: true,
			url: 'http://localhost:4000/getUser',
		}).then((res) => console.log(res))
	}

	return (
		<div>
			<h1>Get User</h1>
			<button onClick={getUser}>Submit</button>
		</div>
	)
}

export default GetUser
