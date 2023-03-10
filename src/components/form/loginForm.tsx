import axios from 'axios'
import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface IFormState {
  username: string
  password: string
}

const LoginForm = () => {

  const [formState, setFormState] = useState<IFormState>({
    username: "",
    password: ""
  })

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const targetInput = event.currentTarget

    const { value, name } = targetInput

    setFormState({
      ...formState,
      [name]: value,
    })
  }, [formState])


  const navigate = useNavigate();

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { username, password } = formState;

    if (!username || !password) {
      window.alert("Fill all the required fields")

      return
    }

    axios.post<JSON>("http://localhost:3500/auth", {
      user: username,
      pwd: password
    })
      .then(function (response) {
        navigate('/', { replace: true });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })

  }, [formState]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputUsername" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          required
          value={formState.username}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          required
          value={formState.password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

export default LoginForm
