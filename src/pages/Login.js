import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import RegLogForm from '../components/RegLogForm'
import API from '../axios'

const Login = () => {
	const [redirect, setRedirect] = useState(false)
	const [flash, setFlash] = useState('')

	const handleLogin = event => {
		event.preventDefault()
		let username = document.getElementById('email-field')
		let password = document.getElementById('password-field')
		API.post('/login', {
			username: `${username.value}`,
			password: `${password.value}`
		})
			.then(res => {
				if (res.status === 200) {
					setRedirect(true)
				}
				if (res.data.message) {
					console.log(res.status)
				}
			})
			.catch(err => {
				console.log(err.response)
			})
	}

	if (redirect) {
		return <Redirect to={{ pathname: '/' }} />
	}

	return (
		<>
			<h1>Login</h1>
			{flash ? <p>{flash}</p> : null}

			<RegLogForm link={'/register'} page='login' handleLogin={handleLogin} />
		</>
	)
}

export default Login
