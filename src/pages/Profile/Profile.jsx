import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AccountCard from '../../components/AccountCard/AccountCard'
import Layout from '../../components/Layout/Layout'
import UserProfileHeader from '../../components/UserProfileHeader/UserProfileHeader'
import { ACCOUNTS_CONTENT } from '../../data/data.js'
import useUserProfile from '../../hooks/useUserProfile'

export default function Profile() {
  const stateToken = useSelector((state) => state.user.token)
  const stateIsConnected = useSelector((state) => state.user.isConnected)
  const navigate = useNavigate()
  const { getUserProfile } = useUserProfile(stateToken)

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
