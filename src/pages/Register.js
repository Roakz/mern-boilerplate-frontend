import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'
import RegLogForm from '../components/RegLogForm'
import API from '../axios'


const Register = () => {

	const [redirect, setRedirect] = useState(false)

	const handleRegister = event => {
		event.preventDefault()
		let username = document.getElementById('email-field')
		let password = document.getElementById('password-field')
		API.post('/register', {
			username: `${username.value}`,
			password: `${password.value}`
		})
			.then(res => console.log('Status:', res.status, res.data, '!'))
			.then(setRedirect(true))
			.catch(err => console.log(err))
	}


	if (redirect) {
		return(<Redirect to={{ pathname: '/login' }} />)
	}
	return (
		<>
			<h1>Register</h1>
			<RegLogForm
				link={'/login'}
				page='register'
				handleRegister={handleRegister}
			/>
		</>
	)
}

export default Register
