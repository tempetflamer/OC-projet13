import React from 'react'
import PropTypes from 'prop-types'
import './Login.scss'
import LoginForm from '../../components/LoginForm/LoginForm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

export default function Login () {
  return (
    <main className='main bg-dark'>
    <section className='sign-in-content'>
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>
        <LoginForm />
    </section>
</main>
  )
}

Login.propTypes = {

}
