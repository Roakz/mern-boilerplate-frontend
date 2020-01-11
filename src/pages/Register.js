import React from 'react'
import RegLogForm from '../components/RegLogForm'

const handleRegister = (event) => {
	event.preventDefault()
	let username = document.getElementById("email-field")
	let password = document.getElementById("password-field")
	console.log(username.value, password.value)
	console.log("Register User!!")
}

const Register = () => {
	return (
		<>
			<h1>Register</h1>
			<RegLogForm link={'/login'} page="register" handleRegister={handleRegister} />
		</>
	)
}

export default Register
