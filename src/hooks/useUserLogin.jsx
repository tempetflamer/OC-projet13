import { useDispatch } from 'react-redux'
import * as actions from '../redux/reducer.js'
import api from '../utils/api.js'

export default function useUserLogin() {
  const dispatch = useDispatch()

  const getUserLogin = async (email, password) => {
    try {
      const res = await api.axiosToken({ email, password })
      dispatch(actions.getToken({ token: res, email }))
      return res
    } catch (e) {
      if (e.response.data.message === 'Error: User not found!') {
        return { error: 'User not found in database' }
      } else {
        if (e.response.data.message === 'Error: Password is invalid') {
          return { error: "User's password is invalid" }
        } else {
          return { error: 'Server connection error' }
        }
      }
    }
  }

  return { getUserLogin }
}
