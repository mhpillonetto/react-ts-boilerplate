import React, { useCallback, useState } from 'react'

interface IFormState {
  username: string
  email: string
  password: string
}

const RegisterForm = () => {

  const [formState, setFormState] = useState<IFormState>({
    username: "",
    email: "",
    password: ""
  })

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const targetInput = event.currentTarget

    const {value, name} = targetInput

    setFormState({
      ... formState,
      [name]: value,
    })
  }, [formState])



  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { username, email, password } = formState;

    if (!email || !username || !password) {
      window.alert("Fill all the required fields")

      setIsLoggedIn(false)

      return
    }

    setIsLoggedIn(true)

  },[formState]);


  if (isLoggedIn) {
    return(
      <div>
        <h1>New Trainer Created :)</h1>
      </div>
    )
  }
  
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
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          required
          value={formState.email}
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

export default RegisterForm
