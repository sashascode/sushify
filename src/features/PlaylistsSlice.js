import { createSlice } from "@reduxjs/toolkit";

export const playlistsSlice = createSlice({
    name: 'playlists',
    initialState: {
        playlists: [],
    },
    reducers: {
        SET_PLAYLISTS: (state, action) => {
            state.playlists = action.payload;
        }
    }
});

export const { SET_PLAYLISTS } = playlistsSlice.actions;
export const selectPlaylists = state => state.playlists.playlists;
export default playlistsSlice.reducer;