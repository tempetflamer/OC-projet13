import { createSlice } from "@reduxjs/toolkit"
import produce from 'immer'

const { actions, reducer } = createSlice({
    name: 'UserReducer',
    initialState: {
        isConnected: false,
        token: null,
        email: null,
        firstName: null,
        lastName: null,
    },

    reducers: {
        //on verra
        getToken: (state, action) => {
            return {
                ...state,
                isConnected: true,
                token: `${action.payload.token}`,
                email: action.payload.email
            }

        },
        //on verra
        getUser: (state, action) => {
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName
            }
        },
        logIn: (state, action) => {
            return {
                ...state,
                isConnected: true,
                token: `${action.payload.token}`,
                email: action.payload.email,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName
            }
        },
        logOut: (state) => {
            return {
                ...state,
                isConnected: false,
                token: null,
                email: null,
                firstName: null,
                lastName: null,
            }

        }
    }
})


export const { getToken, getUser, logOut, logIn } = actions
export default reducer