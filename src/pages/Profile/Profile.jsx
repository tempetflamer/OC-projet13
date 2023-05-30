import React from 'react'
import PropTypes from 'prop-types'
import AccountCard from '../../components/AccountCard/AccountCard'
import UserProfileHeader from '../../components/UserProfileHeader/UserProfileHeader'
import { ACCOUNTS_CONTENT } from '../../data/data.js'
import Layout from '../../components/Layout/Layout'

export default function Profile() {
  return (
    <Layout className="main bg-dark">
      <UserProfileHeader />
      <h2 className="sr-only">Accounts</h2>
      {ACCOUNTS_CONTENT.map(({ id, title, amount, description }) => (
        <AccountCard key={id} title={title} amount={amount} description={description} />
      ))}
    </Layout>
  )
}

Profile.propTypes = {}
