import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useUserEditName from '../../hooks/useUserEditName'
import './UserProfileHeader.scss'

export default function UserProfileHeader() {
  const stateToken = useSelector((state) => state.user.token)
  const stateFirstName = useSelector((state) => state.user.firstName)
  const stateLastName = useSelector((state) => state.user.lastName)
  const [errorMessage, setErrorMessage] = useState('')
  const [editName, setEditName] = useState(false)
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const { getUserEditName } = useUserEditName(stateToken)

  function displayFormEdit() {
    setEditName(!editName)
  }

  async function editUser() {
    if (
      firstNameRef.current.value.trim() === (firstNameRef.current.defaultValue || '') &&
      lastNameRef.current.value.trim() === (lastNameRef.current.defaultValue || '')
    ) {
      setEditName(!editName)
    } else {
      const res = await getUserEditName(firstNameRef.current.value.trim(), lastNameRef.current.value.trim())
      if (res.error) {
        setErrorMessage(res.error)
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
              <label htmlFor="fistname">
                <input type="text" id="fistname" className="input-edit" defaultValue={stateFirstName} ref={firstNameRef} />
              </label>

              <label htmlFor="lastname">
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
