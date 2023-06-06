import { useSelector } from 'react-redux'
import api from '../utils/api.js'

export default function useUserProfile() {
  const stateToken = useSelector((state) => state.user.token)

  const getUserProfile = async () => {
    try {
      const res = await api.axiosProfile(stateToken)
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
