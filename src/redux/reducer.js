import { createSlice } from "@reduxjs/toolkit"

const { actions, reducer } = createSlice({
    name: 'UserReducer',
    initialState: {
        isConnected: false,
        token: null,
        firstName: null,
        lastName: null,
    },

    reducers: {
        getToken: (state, action) => {
            return {
                ...state,
                isConnected: true,
                token: `${action.payload.token}`,
            }

        },
        getUser: (state, action) => {
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName
            }
        },
        logOut: (state) => {
            return {
                ...state,
                isConnected: false,
                token: null,
                firstName: null,
                lastName: null,
            }

        }
    }
})


export const { getToken, getUser, logOut } = actions
export default reducer