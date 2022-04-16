import { createSlice } from "@reduxjs/toolkit";

export const accessTokenSlice = createSlice({
    name: "accessToken",
    initialState: {
        accessToken: null
    },
    reducers : {
        SET_ACCESS_TOKEN: (state, action) => {
            state.accessToken = action.payload
        }
    }
})

export const selectAccessToken = (state) => state.accessToken;

export const { SET_ACCESS_TOKEN } = accessTokenSlice.actions;

export default accessTokenSlice.reducer;
