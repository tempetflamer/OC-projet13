import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../redux/reducer.js'
import api from '../utils/api.js'

export default function useUserEditName() {
  const dispatch = useDispatch()
  const stateToken = useSelector((state) => state.user.token)

  const getUserEditName = async (firstName, lastName) => {
    try {
      const res = await api.axiosUserUpdate(stateToken, { firstName, lastName })
      dispatch(actions.getUser({ firstName: res.firstName, lastName: res.lastName }))
      return res
    } catch (e) {
      if (e === 'User not found!') {
        const error = 'User not found in database'
        return { error }
      } else {
        const error = 'Server connection error'
        return { error }
      }
    }
  }

  return { getUserEditName }
}

useUserEditName.propTypes = {
  token: PropTypes.string,
}
