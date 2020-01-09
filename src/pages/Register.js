import React from 'react'
import RegLogForm from '../components/RegLogForm'

const Register = () => {
	return (
		<>
			<h1>Register</h1>
			<RegLogForm link={'/login'} page="register"/>
		</>
	)
}

export default Register
