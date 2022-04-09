import { createSlice } from "@reduxjs/toolkit";

export const searchResSlice = createSlice({
    name: "searchRes",
    initialState: {
        searchRes: [],
    },
    reducers: {
        SET_SEARCH_RES: (state, action) => {
            state.searchRes = action.payload;
        },
    }
})

export const { SET_SEARCH_RES } = searchResSlice.actions;

export const selectSearchRes = (state) => state.searchRes.searchRes;

export default searchResSlice.reducer;