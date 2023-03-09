import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <h2>Log in here</h2>
      <div>
        <ul>
          <li>
            <Link to="/register" replace={true}>Register</Link>
          </li>
          <li>
            <Link to="/" replace={true}>Home</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Login
