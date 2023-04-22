import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../globalVars";

const initialState = {
    candidates: [
        {id: '1', userId: '2'}
    ]
}

const candidatesSlice = createSlice({
    name: 'candidates', 
    initialState,
    reducers: {
        setCandidates: (state, action) => {
            state.candidates = action.payload
        }

    }, 
    extraReducers: (builder) => {
        builder.addCase(fetchCandidates.fulfilled, (state, action) => {
            state.candidates = action.payload
        })
    }
})

export const fetchCandidates = createAsyncThunk('candidates/fetchCandidates', async(accessToken) => {
    const candidates = await axios.get(`${BASE_URL}/candidates`, { headers: {authorization: accessToken}})
    return candidates.data
})

export default candidatesSlice.reducer