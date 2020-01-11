import React from 'react'
import RegLogForm from '../components/RegLogForm'

const handleLogin = (event) => {
	event.preventDefault()
	let username = document.getElementById('email-field')
	let password = document.getElementById('password-field')
	console.log(username.value, password.value)
	console.log('Login User!!')
}

const Login = () => {
	return (
		<>
			<h1>Login</h1>
			<RegLogForm link={'/register'} page='login' handleLogin={handleLogin}/>
		</>
	)
}

export default Login
