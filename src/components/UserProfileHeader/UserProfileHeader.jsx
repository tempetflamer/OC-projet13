import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import './UserProfileHeader.scss'
import api from '../../utils/api.js'
import * as actions from '../../redux/reducer.js'
import useUserEditName from '../../hooks/useUserEditName'

export default function UserProfileHeader() {
  const stateToken = useSelector((state) => state.user.token) // provient de store
  const stateFirstName = useSelector((state) => state.user.firstName) // provient de store
  const stateLastName = useSelector((state) => state.user.lastName) // provient de store
  const [errorMessage, setErrorMessage] = useState('')
  const [editName, setEditName] = useState(false)
  const navigate = useNavigate()
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const { getUserEditName } = useUserEditName(stateToken)

  function displayFormEdit() {
    setEditName(!editName)
  }

  //soit en async je ne suis pas sur de tout ettendre sinon
  async function editUser() {
    if (
      firstNameRef.current.value.trim() === (firstNameRef.current.defaultValue || '') &&
      lastNameRef.current.value.trim() === (lastNameRef.current.defaultValue || '')
    ) {
      console.log('pas de modif')
      setEditName(!editName)
    } else {
      console.log('ref de firstName & lastname', firstNameRef.current.value.trim(), lastNameRef.current.value.trim())

      const res = await getUserEditName(firstNameRef.current.value.trim(), lastNameRef.current.value.trim())
      console.log('res userProfile', res)
      if (res === null) {
        setErrorMessage('Server error, change failed')
        return ''
      }
      setEditName(!editName)
    }
  }

  if (!stateFirstName || !stateLastName) {
    return ''
  }
  return (
    <div className="profile__header">
      {!editName ? (
        <>
          <h1>
            Welcome back
            <br />
            {stateFirstName + ' ' + stateLastName}!
          </h1>
          <button className="btn-edit" onClick={() => displayFormEdit()}>
            Edit Name
          </button>
        </>
      ) : (
        <>
          <h1>Welcome back</h1>
          <form>
            <div className="wrapper--edit">
              <label htmlFor="fisrtName">
                <input type="text" id="fistname" className="input-edit" defaultValue={stateFirstName} ref={firstNameRef} />
              </label>

              <label htmlFor="lastName">
                <input type="text" id="lastname" className="input-edit" defaultValue={stateLastName} ref={lastNameRef} />
              </label>
            </div>
            <span className="error-message">{errorMessage}</span>
            <div className="wrapper--save">
              <button type="button" className="btn-save" onClick={() => editUser()}>
                Save
              </button>
              <button type="button" className="btn-cancel" onClick={() => displayFormEdit()}>
                Cancel
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  )
}

UserProfileHeader.propTypes = {}
