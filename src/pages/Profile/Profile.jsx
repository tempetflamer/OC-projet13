import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AccountCard from '../../components/AccountCard/AccountCard'
import Layout from '../../components/Layout/Layout'
import UserProfileHeader from '../../components/UserProfileHeader/UserProfileHeader'
import { ACCOUNTS_CONTENT } from '../../data/data.js'
import useUserProfile from '../../hooks/useUserProfile'
import * as actions from '../../redux/reducer.js'

export default function Profile() {
  const stateToken = useSelector((state) => state.user.token)
  const stateIsConnected = useSelector((state) => state.user.isConnected)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { getUserProfile } = useUserProfile(stateToken)

  const getData = useCallback(async () => {
    const res = await getUserProfile()
    dispatch(actions.getUser({ firstName: res.firstName, lastName: res.lastName }))
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
