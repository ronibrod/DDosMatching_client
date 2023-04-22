// there is a problem in the server about shiduchContoller you need to fix that first,
// you can do your app wihout this controller, this controller is extra
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../globalVars";

const initialState = {
    shiduchim: []
}

export const shiduchimSlice = createSlice({
    name: 'shiduchim',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchShiduchim.fulfilled, (state, action) => {
            state.shiduchim = action.payload
        })
    }
})

export const fetchShiduchim = createAsyncThunk('shiduchim/fetchShiduchim', async(accessToken) => {
    const shiduchim = await axios.get(`${BASE_URL}/shiduch`, {headers: {Authorization: accessToken}})
    return shiduchim.data
})

export default shiduchimSlice.reducer