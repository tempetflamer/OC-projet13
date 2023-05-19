import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Header.scss'
import Logo from '../../assets/img/argent_bank_logo.png'


export default function Header () {
  return (
    <header>
      <NavLink to="/home">
    <img src={Logo} alt={'Logo of ArgentBank company'} />
        </NavLink>
    <nav>
      <NavLink to="/login">Sign In</NavLink>
    </nav>
  </header>
  )
}

Header.propTypes = {

}
