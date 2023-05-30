import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import './UserProfileHeader.scss'
import api from '../../utils/api.js'
import * as actions from '../../redux/reducer.js'

export default function UserProfileHeader() {
  const stateToken = useSelector((state) => state.user.token) // provient de store
  const stateFirstName = useSelector((state) => state.user.firstName) // provient de store
  const stateLastName = useSelector((state) => state.user.lastName) // provient de store
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [errorMessage, setErrorMessage] = useState('')
  const [editName, setEditName] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function displayFormEdit() {
    setEditName(!editName)
  }

  async function editUser() {
    const res = await api.axiosUserUpdate(stateToken, { firstName, lastName })
    dispatch(actions.getUser({ firstName: res.firstName, lastName: res.lastName }))
    setEditName(!editName)
  }

  //faudra décalé cette vérification directement sur la page profile
  useEffect(() => {
    console.log('state token firstname, lastname', stateToken, stateFirstName, stateLastName)
    if (!stateToken) {
      navigate('/login')
    }
  }, [stateToken])

  // if (!stateFirstName || !stateLastName) {
  //   return ''
  // }
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
                <input type="text" id="fistname" className="input-edit" onChange={(e) => setFirstName(e.target.value)} placeholder={stateFirstName} />
              </label>

              <label htmlFor="lastName">
                <input type="text" id="lastname" className="input-edit" onChange={(e) => setLastName(e.target.value)} placeholder={stateLastName} />
              </label>
            </div>
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
