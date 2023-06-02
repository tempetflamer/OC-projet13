import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Layout from '../../components/Layout/Layout'
import LoginForm from '../../components/LoginForm/LoginForm'
import './Login.scss'

export default function Login() {
  return (
    <Layout className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>
        <LoginForm />
      </section>
    </Layout>
  )
}
