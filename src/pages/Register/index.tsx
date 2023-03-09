import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <h2>Register here</h2>
      <div>
        <ul>
          <li>
            <Link to="/login" replace={true}>Log in</Link>
          </li>
          <li>
            <Link to="/" replace={true}>Home</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Register
