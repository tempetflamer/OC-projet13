//the const is nopt exported anymore created a class a la place
// import { api } from '../utils/api.js'
// import { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'

// /**
//  * Hook to get User Sessions
//  * @function
//  * @name useUserLogin
//  * @param {number} id - user ID
//  * @returns {object} - Return {data, isLoading, error} to manage the state of the hook
//  */
// export default function useUserLogin(userName, userPassword) {
//   const [data, setData] = useState([])
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState()

//   useEffect(() => {
//     setData([])
//     setError(undefined)
//     setIsLoading(true)

//     /**
//      * Set setData, setIsLoading, setError with User Average Session
//      * @name getUserSession
//      * @param {Number} id
//      */
//     const getUserLogin = async (userName, userPassword) => {
//       try {
//         const res = await api.get(`/user/login`)
//         console.log('res :', res)
//         setError(undefined)
//         setIsLoading(false)
//         setData(res.data.data)
//       } catch (e) {
//         setData([])
//         setError(e)
//         setIsLoading(false)
//       }
//     }
//     getUserLogin(userName, userPassword)
//   }, [])
//   return { data, isLoading, error }
// }

// useUserLogin.propTypes = {
//   userName: PropTypes.string,
//   userPassword: PropTypes.string,
// }
