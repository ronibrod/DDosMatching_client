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
        },
        addCandidate: (state, action) => {
            state.candidates.push(action.payload)
        }

    }, 
    extraReducers: (builder) => {
        builder.addCase(fetchCandidates.fulfilled, (state, action) => {
            state.candidates = action.payload
        })
    }
})

export const { addCandidate } = candidatesSlice.actions

export const fetchCandidates = createAsyncThunk('candidates/fetchCandidates', async(accessToken) => {
    const candidates = await axios.get(`${BASE_URL}/candidates`, { headers: {authorization: accessToken}})
    return candidates.data
})

export const addCandidateFetch = (candidate) => async(dispatch, getState) =>{
    const candidate = await axios.post(`${BASE_URL}/candidates`, { headers: {authorization: accessToken}})
    dispatch(addCandidate(candidate))
} 

export default candidatesSlice.reducer