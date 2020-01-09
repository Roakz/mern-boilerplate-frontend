import React from 'react'
import { Link } from 'react-router-dom'

const RegLogForm = props => {
	return (
		<div>
			<label>Email:</label>
			<input />
			<label>Password</label>
			<input />
			<button>Submit</button>
			<Link to={`${props.link}`}>
				{props.page === 'register' ? 'Login' : 'Register'}
			</Link>
		</div>
	)
}

export default RegLogForm
