import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

export default function Button({ className, text, action }) {
  return (
    <button className={'btn ' + className} onClick={action}>
      {text}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
}
