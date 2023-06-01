import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import Logo from '../../assets/img/argent_bank_logo.png'
import * as actions from '../../redux/reducer.js'
import './Header.scss'

export default function Header() {
  const stateIsConnected = useSelector((state) => state.user.isConnected)
  const stateFirstName = useSelector((state) => state.user.firstName)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function signOut() {
    dispatch(actions.logOut())
    navigate('/')
  }

  return (
    <header>
      <nav className="main-nav">
        <NavLink to="/home" className="main-nav__logo">
          <img className="main-nav__logo__image" src={Logo} alt={'Logo of ArgentBank company'} />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        {!stateIsConnected ? (
          <NavLink to="/login" className="main-nav__item">
            <FontAwesomeIcon icon={faCircleUser} />
            Sign In
          </NavLink>
        ) : (
          <div className="main-nav--wrapper">
            <NavLink to="/profile" className="main-nav__item">
              <FontAwesomeIcon icon={faCircleUser} />
              {stateFirstName}
            </NavLink>
            <NavLink to="/" className="main-nav__item main-nav__button-out" onClick={() => signOut()}>
              <FontAwesomeIcon icon={faRightFromBracket} />
              Sign out
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  )
}

Header.propTypes = {}
