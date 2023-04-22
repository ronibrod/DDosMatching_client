import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../globalVars'

const initialState = {
    tags: []
}

const tagsSlice = createSlice({
    name: 'tags', 
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchTags.fulfilled, (state, action) => {
            state.tags = action.payload
        })
    }
})

export const fetchTags = createAsyncThunk('tags/fetchTags', async(accessToken) => {
    const tags = await axios.get(`${BASE_URL}/tags`, {headers: {Authorization: accessToken}})
    return tags.data
})

export default tagsSlice.reducer

export const tgasSelectors = (state) => state.tags.tags