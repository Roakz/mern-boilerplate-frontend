import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import RegLogForm from '../components/RegLogForm'
import API from '../axios'

const Login = (props) => {

	const [redirect, setRedirect] = useState(false)
	const [flash, setFlash] = useState('')
	const {setToken} = props

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
					setToken(res.data.token)
					setRedirect(true)
				}
			})
			.catch(err => {
				if (err.response && err.response.status === 401) {
					setFlash(err.response.data)
					username.value = ''
					password.value = ''
				}
				else{
					setFlash("sorry! something went wrong. Please try again later.")
				}
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
