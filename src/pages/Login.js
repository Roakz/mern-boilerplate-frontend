import React from 'react'
import RegLogForm from '../components/RegLogForm'

const Login = () => {
    return (
     <>
        <h1>Login</h1>
        <RegLogForm link={'/register'} page="login" />
    </>
    )
}

export default Login