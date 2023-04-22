import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    currUser: {username: '', password: ''},
    users:[
    {username: 'roni', password: "1234"},
    {username: 'haim', password: "1234"},
]}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
   
})

const fetchUsers = createAsyncThunk('users/fetchUsers', async() => {

})
const authUser = createAsyncThunk()


export const usersSelectore = (state) => state.users

export default usersSlice.reducer
