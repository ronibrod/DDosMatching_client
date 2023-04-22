import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../globalVars'

const initialState = {
    persons: []
}

const personsSlice = createSlice({
    name: 'persons', 
    initialState,
    reducers: {
    
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPersons.fulfilled, (state, action) => {
            console.log("hello");
            console.log(action);
            state.persons = action.payload
        })
    }
})

export const fetchPersons = createAsyncThunk('persons/fetchPersons', async(accessToken) => {
    const persons = await axios.get(`${BASE_URL}/persons`, {headers:{ authorization: accessToken}})
    return persons.data
})


export default personsSlice.reducer

export const personsSelector = (state) => state.persons