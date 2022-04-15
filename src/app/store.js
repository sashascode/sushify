import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/UserSlice';
import playlistReducer from '../features/PlaylistSlice';
import searchReducer from '../features/SearchSlice';
import searchResReducer from '../features/SearchResSlice';
import playlistsReducer from '../features/PlaylistsSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        playlist: playlistReducer,
        playlists: playlistsReducer,
        search: searchReducer,
        searchRes: searchResReducer,
    }
})
