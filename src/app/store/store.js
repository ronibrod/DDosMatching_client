import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/users/usersSlice";
import candidatesSlice from "../features/candidiates/candidatesSlice";
import personsSlice from '../features/persons/personsSlice'
import tagsSlice from "../features/tags/tagsSlice";
import shiduchimSlice from '../features/shiduchim/shiduchim.js'
export const store = configureStore({
    reducer:{
        users: usersSlice,
        candidates: candidatesSlice,
        persons: personsSlice,
        tags: tagsSlice, 
        shiduchim: shiduchimSlice
    }
})