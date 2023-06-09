import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import './Error404.scss'

export default function Error404() {
  return (
    <Layout>
      <div className="error">
        <div className="error__content">
          <p className="error__content__number">404</p>
          <p className="error__content__text">Oops! we can't find that page.</p>
        </div>
        <Link to="/" className="error__link">
          Return to homepage
        </Link>
      </div>
    </Layout>
  )
}
