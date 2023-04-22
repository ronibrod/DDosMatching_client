import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from '../globalVars'
const initialState = {
    currUser: { userId: '', username: '', accessToken: '' },
    users: [
        { username: 'roni', password: "1234" },
        { username: 'haim', password: "1234" },
    ]
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUser: {
            reducer: (state, action) => {
                state.currUser = action.payload
            }, prepare: ({ userId, username, accessToken }) => {
                return {
                    payload: {
                        userId,
                        username,
                        accessToken: `Bearer ${accessToken}`
                    }
                }
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
    }

})

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const users = await axios.get(`${BASE_URL}/users`)
    return users.data
})

export const { setUser } = usersSlice.actions

export const authUser = (username, password) => async (dispatch, getState) => {
    const user = await axios.post(`${BASE_URL}/users/login`, { username, password })
    console.log(user.data);
    dispatch(setUser(user.data))
}

export const usersSelectore = (state) => state.users
export const currUserSelectore = (state) => state.users.currUser

export default usersSlice.reducer