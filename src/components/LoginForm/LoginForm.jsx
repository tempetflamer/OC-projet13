import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useUserLogin from '../../hooks/useUserLogin'
import * as actions from '../../redux/reducer.js'
import './LoginForm.scss'

export default function LoginForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const usernameRef = useRef()
  const passwordRef = useRef()
  const stateLoginToken = useSelector((state) => state.user.token)
  const { getUserLogin } = useUserLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const username = await usernameRef.current.value.trim()
    const password = await passwordRef.current.value.trim()

    if (username === '' || password === '') {
      setErrorMessage('You must fill all the fields')
    } else {
      setErrorMessage('')
      const res = await getUserLogin(username, password)
      if (res.error) {
        setErrorMessage(res.error)
      } else {
        dispatch(actions.getToken({ token: res }))
      }
    }
  }

  useEffect(() => {
    if (stateLoginToken) {
      navigate('/profile')
    }
  }, [stateLoginToken])

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked)
  }

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" ref={usernameRef} autoComplete="on" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordRef} autoComplete="on" />
      </div>
      <div className="input-remember">
        <label htmlFor="remember-me">Remember me</label>
        <input type="checkbox" id="remember-me" checked={rememberMe} onChange={handleRememberMe} />
      </div>
      <span className="error-message">{errorMessage}</span>
      <button className="btn btn-signup" type="submit">
        Sign In
      </button>
    </form>
  )
}
