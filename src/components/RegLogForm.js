import React from 'react'
import { Link } from 'react-router-dom'

const RegLogForm = props => {
	return (
		<div>
			<form>
				<label>Email:</label>
				<input id='email-field' type='email' name='username' />
				<label>Password</label>
				<input id='password-field' type='password' name='password' />
				<button
					onClick={
						props.page === 'login' ? props.handleLogin : props.handleRegister
					}
				>
					Submit
				</button>
			</form>
			<Link to={`${props.link}`}>
				{props.page === 'register' ? 'Login' : 'Register'}
			</Link>
		</div>
	)
}

export default RegLogForm
