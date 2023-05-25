import React from 'react'
import PropTypes from 'prop-types'
import AccountCard from '../../components/AccountCard/AccountCard'
import UserProfileHeader from '../../components/UserProfileHeader/UserProfileHeader'
import { ACCOUNTS_CONTENT } from '../../data/data.js'

export default function User() {
  return (
    <main className="main backgroundDark">
      <UserProfileHeader />
      <h2 className="sr-only">Accounts</h2>
      {ACCOUNTS_CONTENT.map(({ id, title, amount, description }) => (
        <AccountCard key={id} title={title} amount={amount} description={description} />
      ))}
    </main>
  )
}

User.propTypes = {}
