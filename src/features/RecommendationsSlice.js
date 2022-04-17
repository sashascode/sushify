import { createSlice } from "@reduxjs/toolkit";

export const recommendationsSlice = createSlice({
    name: "recommendations",
    initialState: {
        recommendations: null
    },
    reducers : {
        SET_RECOMMENDATIONS: (state, action) => {
            state.recommendations = action.payload
        }
    }
})

export const selectRecommendations = (state) => state.recommendations;

export const { SET_RECOMMENDATIONS } = recommendationsSlice.actions;

export default recommendationsSlice.reducer;
