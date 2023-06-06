import { useSelector } from 'react-redux'
import api from '../utils/api.js'

export default function useUserEditName() {
  const stateToken = useSelector((state) => state.user.token)

  const getUserEditName = async (firstName, lastName) => {
    try {
      const res = await api.axiosUserUpdate(stateToken, { firstName, lastName })
      return res
    } catch (e) {
      if (e.response.data.message === 'Error: User not found!') {
        return { error: 'User not found in database' }
      } else {
        return { error: 'Server connection error' }
      }
    }
  }

  return { getUserEditName }
}
