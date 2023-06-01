import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Link, useNavigate } from 'react-router-dom'
import './LoginForm.scss'
import useUserLogin from '../../hooks/useUserLogin'
//import Button from '../Button/Button'
import ButtonLogin from '../Button/Button'
import api from '../../utils/api.js'
//import actions from '../../reducer.js' // typeError: _reducer_js__WEBPACK_IMPORTED_MODULE_6__.default.get Token is not a function (L.54)
import * as actions from '../../redux/reducer.js'

export default function LoginForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const rememberMeRef = useRef()
  const usernameRef = useRef()
  const passwordRef = useRef()
  const stateLoginToken = useSelector((state) => state.user.token) // provient de store
  const { getUserLogin } = useUserLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if ((usernameRef.current.value || passwordRef.current.value) === '' || (usernameRef.current.value || passwordRef.current.value) === ' ') {
      setErrorMessage('You must fill all the fields')
    } else {
      setErrorMessage('')
      const res = await getUserLogin(username, password)
      if (res.error) {
        setErrorMessage(res.error)
      }
    }
  }

  useEffect(() => {
    if (stateLoginToken) {
      navigate('/profile')
    }
  }, [stateLoginToken, errorMessage, rememberMe])

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked)
  }

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleUserPassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" onChange={handleUsername} ref={usernameRef} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={handleUserPassword} ref={passwordRef} />
      </div>
      <div className="input-remember">
        <label htmlFor="remember-me">Remember me</label>
        <input type="checkbox" id="remember-me" checked={rememberMe} onChange={handleRememberMe} ref={rememberMeRef} />
      </div>
      <span className="error-message">{errorMessage}</span>
      <button className="btn btn-signup" type="submit">
        Sign In
      </button>
    </form>
  )
}
