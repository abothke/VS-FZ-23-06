import React, { useContext, useRef } from 'react'
import { mainContext } from '../../context/MainProvider'
import Nav from '../../components/nav/Nav'

function Login() {
  //! useRef immer in einer Funktion verwenden, da es sonst undefined ist
  const userName = useRef()
  const email = useRef()
  const password = useRef()

  const { user, setUser } = useContext(mainContext)

  const loginFunction = (event) => {
    event.preventDefault()
    // console.log(userName.current.value);
    // console.log(email.current.value);
    // console.log(password.current.value);
    setUser({
      ...user,
      userName: userName.current.value,
      email: email.current.value,
      password: password.current.value
    })
  }

  console.log("User in Login.jsx", user)
  return (
    <>
    <Nav />
    <div>Login</div>
    <form onSubmit={loginFunction}>
      <label htmlFor="userName">Username:</label>
      <input
        type="text"
        ref={userName}
        placeholder="Username"
        />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        ref={email}
        placeholder="Email"
        />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        ref={password}
        placeholder="Password"
        />
      <button type="submit">Login</button>
          </form>
    </>
  )
}

export default Login