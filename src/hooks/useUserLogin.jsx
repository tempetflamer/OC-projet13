import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../redux/reducer.js'
import api from '../utils/api.js'

export default function useUserLogin() {
  const dispatch = useDispatch()
  const stateToken = useSelector((state) => state.user.token) // provient de store

  const getUserLogin = async (email, password) => {
    try {
      console.log('useUserName', email, password)
      const res = await api.axiosToken({ email, password })
      dispatch(actions.getToken({ token: res, email }))
      console.log('res de getUserLogin', res)
      return res
    } catch (e) {
      //gérer la gestion des erreur
      console.log('e', e)
      if (e === 'User not found!') {
        const error = 'User not found in database'
        return { error }
      } else {
        if (e === 'Password is invalid') {
          const error = "User's password is invalid"
          return { error }
        } else {
          //return null
          const error = 'Server connection error'
          return { error }
        }
      }
    }
  }

  return { getUserLogin }
}

useUserLogin.propTypes = {
  token: PropTypes.string,
}
