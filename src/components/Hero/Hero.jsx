import React from 'react'
import PropTypes from 'prop-types'
import './Hero.scss'

export default function Hero() {
  return (
    <div className="hero">
      <section className="hero__content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="hero__content__subtitle">No fees.</p>
        <p className="hero__content__subtitle">No minimum deposit.</p>
        <p className="hero__content__subtitle">High interest rates.</p>
        <p className="hero__content__text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  )
}

Hero.propTypes = {}
