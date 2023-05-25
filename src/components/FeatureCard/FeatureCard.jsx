import React from 'react'
import PropTypes from 'prop-types'
import './FeatureCard.scss'

export default function FeatureCard({ imgSrc, imgAlt, title, description }) {
  return (
    <article className="features__item">
      <img src={imgSrc} className="features__icon" alt={imgAlt} />
      <h3 className="features__item__title">{title}</h3>
      <p>{description}</p>
    </article>
  )
}

FeatureCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
