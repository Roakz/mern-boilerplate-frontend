import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Route exact path='/' component={Home} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
			</div>
		</BrowserRouter>
	)
}

export default App
