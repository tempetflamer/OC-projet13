import api from '../utils/api.js'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../redux/reducer.js'

/**
 * Hook to get User Sessions
 * @function
 * @name useUserLogin
 * @param {number} id - user ID
 * @returns {object} - Return {data, isLoading, error} to manage the state of the hook
 */
export default function useUserProfile(token) {
  const dispatch = useDispatch()
  const stateToken = useSelector((state) => state.user.token) // provient de store

  const getUserProfile = async () => {
    try {
      const res = await api.axiosProfile(stateToken) // Appele de l'api
      dispatch(actions.getUser({ firstName: res.firstName, lastName: res.lastName })) // envoi au reducer
      console.log('res de getUserProfile', res)
      return res
    } catch (e) {
      return null
    }
  }

  return { getUserProfile }

  // /**
  //  * Hook to get User Sessions
  //  * @function
  //  * @name useUserLogin
  //  * @param {number} id - user ID
  //  * @returns {object} - Return {data, isLoading, error} to manage the state of the hook
  //  */
  // export default function useUserProfile(token) {
  //   const dispatch = useDispatch()
  //   const stateToken = useSelector((state) => state.user.token) // provient de store
  //   const [data, setData] = useState([])
  //   const [isLoading, setIsLoading] = useState(false)
  //   const [error, setError] = useState()

  //   const getUserProfile = async (userName, userPassword) => {
  //     setData([])
  //     setError(undefined)
  //     setIsLoading(true)
  //     try {
  //       const res = await api.axiosProfile(stateToken) // Appele de l'api
  //       dispatch(actions.getUser({ firstName: res.firstName, lastName: res.lastName })) // envoi au reducer
  //       console.log('res de getUserProfile', res)
  //       console.log('res :', res)
  //       setError(undefined)
  //       setIsLoading(false)
  //       setData(res.data.data)
  //       //return res
  //       //return { data, isLoading, error }
  //     } catch (e) {
  //       setData([])
  //       setError(e)
  //       setIsLoading(false)
  //     }
  //     return { data, isLoading, error }
  //   }

  //   return { data, isLoading, error, getUserProfile }
}

// /**
//  * Hook to get User Sessions
//  * @function
//  * @name useUserLogin
//  * @param {number} id - user ID
//  * @returns {object} - Return {data, isLoading, error} to manage the state of the hook
//  */
// export default function useUserProfile(token) {
//   const stateToken = useSelector((state) => state.user.token) // provient de store
//   const [data, setData] = useState([])
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState()

//   const getUserProfile = async (userName, userPassword) => {
//     setData([])
//     setError(undefined)
//     setIsLoading(true)
//     try {
//       const res = await api.axiosProfile(stateToken) // Appele de l'api
//       dispatch(actions.getUser({ firstName: res.firstName, lastName: res.lastName })) // envoi au reducer
//       console.log('res de getUserProfile', res)
//       console.log('res :', res)
//       setError(undefined)
//       setIsLoading(false)
//       setData(res.data.data)
//       return res
//     } catch (e) {
//       setData([])
//       setError(e)
//       setIsLoading(false)
//     }
//   }

//   return { data, isLoading, error, getUserProfile }
// }

useUserProfile.propTypes = {
  token: PropTypes.string,
}
