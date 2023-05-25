import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Error404.scss'


export default function Error404 () {
  return (
      <div className="error">
        <div className="error__content">
          <p className="error__content__number">404</p>
          <p className="error__content__text">Oups! La page que vous demandez n'existe pas.</p>
        </div>
        <Link to="/" className="error__link">
          Retourner sur le tableau de bord / page de connexion
        </Link>
      </div>
  )
}

Error404.propTypes = {

}
