import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Header.scss'
import Logo from '../../assets/img/argent_bank_logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";


export default function Header () {
  return (
    <header>
    <nav className="main-nav">
      <NavLink to="/home">
    <img className="main-nav-logo-image"  src={Logo} alt={'Logo of ArgentBank company'} />
    <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
      <NavLink to="/login" className={'nav-login'}><FontAwesomeIcon icon={faCircleUser} />Sign In</NavLink>
    </nav>
  </header>
  )
}

Header.propTypes = {

}
