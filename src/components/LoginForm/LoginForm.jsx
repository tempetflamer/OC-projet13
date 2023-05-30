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

  // je pourrais aussi faire juste comme en js et uniquement récupérer le tout à la validfation de la forme mais ej suppose que cette form est plus adapté pour redux/react

  async function getUserAxios() {
    const res = await api.axiosProfile(stateLoginToken) // Appele de l'api
    dispatch(actions.getUser({ firstName: res.firstName, lastName: res.lastName })) // envoi au reducer
    console.log('res de getUserProfile', res)
  }

  const handleSubmit = async (e) => {
    e.preventDefault() //éviter que il charge la page html
    //localStorage.clear()

    console.log('username.ref', usernameRef, passwordRef)
    if ((usernameRef.current.value || passwordRef.current.value) === '' || (usernameRef.current.value || passwordRef.current.value) === ' ') {
      setErrorMessage('You must fill all the fields')
    } else {
      setErrorMessage('')
      try {
        //const email = username // peut être changé après pour l'instant unsername gardé
        const res = await api.axiosToken({ email: username, password })
        if (res) {
          // if (rememberMe === true) {
          //   localStorage.setItem('remember', true)
          //   localStorage.setItem('username', username)
          //   localStorage.setItem('password', password)
          // } else {
          //   localStorage.setItem('remember', false)
          // }
          //mon dispatch ne marche pas, voir L10
          dispatch(actions.getToken({ token: res, email: username }))
          console.log('dispatch passé')
        }
      } catch (error) {
        console.log(error)
        setErrorMessage('User not found in database')
      }
    }
  }

  useEffect(() => {
    if (stateLoginToken) {
      getUserAxios()
      navigate('/profile')
    }
    // if (errorMessage == '') {
    // } else {
    // }

    // if (rememberMe) {
    //   const res = api.axiosToken({ email: localStorage.getItem('username'), password: localStorage.getItem('password') })
    //   dispatch(actions.getToken({ token: res, email: localStorage.getItem('username') }))
    // }
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
    <form onSubmit={handleSubmit}>
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
