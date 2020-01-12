import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import API from './axios'

const App = () => {
	const [tokenState, setTokenState] = useState(null)

	const setToken = token => {
		sessionStorage.setItem('token', token)
		setTokenState(token)
		// API.setHeader(token)
	}

	return (
		<BrowserRouter>
			<div>
				<Route exact path='/' component={Home} />
				<Route exact path='/register' component={Register} />
				<Route
					exact
					path='/login'
					render={props => {
						return <Login {...props} setToken={setToken} />
					}}
				/>
			</div>
		</BrowserRouter>
	)
}

export default App
