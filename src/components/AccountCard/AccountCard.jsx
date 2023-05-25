import React from 'react'
import PropTypes from 'prop-types'
import './AccountCard.scss'
import Button from '../Button/Button'

export default function AccountCard({ title, amount, description }) {
  return (
    <section className="account">
      <article className="accountContentWrapper">
        <h3 className="accountTitle">{title}</h3>
        <p className="accountAmount">{amount}</p>
        <p className="accountAmountDescription">{description}</p>
      </article>
      <div className="accountContentWrapper cta">
        <Button className="btn-transaction" text="View transactions" />
      </div>
    </section>
  )
}

AccountCard.propTypes = {}
