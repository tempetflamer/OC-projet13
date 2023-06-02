import React from 'react'
import PropTypes from 'prop-types'
import './AccountCard.scss'
import Button from '../Button/Button'

export default function AccountCard({ title, amount, description }) {
  return (
    <section className="account">
      <article className="account__content--wrapper">
        <h3 className="account__content__title">{title}</h3>
        <p className="account__content__amount">{amount}</p>
        <p className="account__content__desc">{description}</p>
      </article>
      <div className="account__content--wrapper cta">
        <Button className="btn btn-transaction" text="View transactions" />
      </div>
    </section>
  )
}

AccountCard.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
