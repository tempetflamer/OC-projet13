import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Link, useNavigate } from 'react-router-dom'
import './LoginForm.scss'
import useUserLogin from '../../hooks/useUserLogin'
//import Button from '../Button/Button'
import ButtonLogin from '../Button/Button'
import api from '../../utils/api.js'
//import actions from '../../reducer.js'
import * as actions from '../../reducer.js'

export default function LoginForm() {
  const dispatch = useDispatch()
  //soit navigate soit history => pour le moment j'ai aps encore étudier le fonctionnement de history et pas specialment d'utilité vu le projet
  const navigate = useNavigate()
  const history = useNavigate()
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const rememberMeRef = useRef()
  const usernameRef = useRef()
  const passwordRef = useRef()
  const stateLoginToken = useSelector((state) => state.user.token) // provient de store

  // je pouraais aussi faire juste comme en js et uniquement récupérer le tout à la validfation de la forme mais ej suppose que cette form est plus adapté pour redux/react

  async function getUserAxios() {
    const res = await api.axiosProfile(stateLoginToken) // Appele de l'api
    dispatch(actions.getUser({ firstName: res.firstName, lastName: res.lastName })) // envoi au reducer
    console.log('res de getUserProfile', res)
  }

  const handleSubmit = async (e) => {
    e.preventDefault() //éviter que il charge la page html

    // aps possible un hook a besoin d'être chargé dans le corps de la page pas après le premeir rendu
    // const { data, isLoading, error } = useUserLogin(userName, userPassword)
    // console.log('data user: ', data)

    //pl pas faire un message d'erreur en desosus de chaque élément

    console.log('username.ref', usernameRef, passwordRef)
    if ((usernameRef.current.value || passwordRef.current.value) === '' || (usernameRef.current.value || passwordRef.current.value) === ' ') {
      setErrorMessage('You must fill all the fields')
    } else {
      setErrorMessage('')
      try {
        const email = userName // peut être changé après pour l'instant unsername gardé
        const res = await api.axiosToken({ email, password })
        if (res) {
          //mon dispatch ne marche pas
          dispatch(actions.getToken({ token: res, email: userName }))
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
      //history('/profile')
      navigate('/profile')
    }
    // if (errorMessage == '') {
    // } else {
    // }
  }, [stateLoginToken, errorMessage])

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked)
  }

  const handleUsername = (e) => {
    setUserName(e.target.value)
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
        <input type="checkbox" id="remember-me" checked={rememberMe} onChange={handleRememberMe} ref={rememberMeRef} />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <span className="error-message">{errorMessage}</span>
      {/* Bouton de test redirection */}
      {/* <Link to="/user" className="btn btn-signup">
        Sign In
      </Link> */}
      {/* <Link to="/user">
        <Button className="btn-signup" text="Sign In" />
      </Link> */}
      {/* <ButtonLogin className="btn-signup" text="Sign In" /> */}
      <button className="btn btn-signup" type="submit">
        Sign In
      </button>
    </form>
  )
}
