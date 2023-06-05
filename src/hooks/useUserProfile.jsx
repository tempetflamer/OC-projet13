import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../redux/reducer.js'
import api from '../utils/api.js'

export default function useUserProfile() {
  const dispatch = useDispatch()
  const stateToken = useSelector((state) => state.user.token)

  const getUserProfile = async () => {
    try {
      const res = await api.axiosProfile(stateToken)
      dispatch(actions.getUser({ firstName: res.firstName, lastName: res.lastName }))
      return res
    } catch (e) {
      if (e.response.data.message === 'Error: User not found!') {
        return { error: 'User not found in database' }
      } else {
        return { error: 'Server connection error' }
      }
    }
  }

  return { getUserProfile }
}
