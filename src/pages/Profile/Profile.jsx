import PropTypes from 'prop-types'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import AccountCard from '../../components/AccountCard/AccountCard'
import Layout from '../../components/Layout/Layout'
import UserProfileHeader from '../../components/UserProfileHeader/UserProfileHeader'
import { ACCOUNTS_CONTENT } from '../../data/data.js'
import useUserProfile from '../../hooks/useUserProfile'
import * as actions from '../../redux/reducer.js'
import api from '../../utils/api'

export default function Profile() {
  const stateToken = useSelector((state) => state.user.token) // provient de store
  const stateIsConnected = useSelector((state) => state.user.isConnected)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { getUserProfile } = useUserProfile(stateToken)

  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()

  const getData = useCallback(async () => {
    const res = await getUserProfile()
  }, [])

  useEffect(() => {
    if (stateToken) {
      getData()
    }
    if (!stateIsConnected) {
      navigate('/login')
    }
  }, [stateToken, getData, stateIsConnected])

  // useEffect(() => {
  //   console.log('state token firstname, lastname', stateToken, stateFirstName, stateLastName)
  //   if (!stateToken) {
  //     navigate('/login')
  //   }
  // }, [stateToken])

  // if (!firstName || !lastName) {
  //   return ''
  // }

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
