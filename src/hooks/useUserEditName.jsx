import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../redux/reducer.js'
import api from '../utils/api.js'

export default function useUserEditName() {
  const dispatch = useDispatch()
  const stateToken = useSelector((state) => state.user.token) // provient de store

  const getUserEditName = async (firstName, lastName) => {
    try {
      console.log('useUserName', lastName, firstName)
      const res = await api.axiosUserUpdate(stateToken, { firstName, lastName })
      dispatch(actions.getUser({ firstName: res.firstName, lastName: res.lastName }))
      console.log('res de getUserEditName', res)
      return res
    } catch (e) {
      //gérer la gestion des erreur
      return null
    }
  }

  return { getUserEditName }
}

useUserEditName.propTypes = {
  token: PropTypes.string,
}
