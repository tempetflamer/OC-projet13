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
      if (e === 'User not found!') {
        const error = 'User not found in database'
        return { error }
      } else {
        if (e === 'Password is invalid') {
          const error = "User's password is invalid"
          return { error }
        } else {
          const error = 'Server connection error'
          return { error }
        }
      }
    }
  }

  return { getUserLogin }
}
