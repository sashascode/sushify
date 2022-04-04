import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/UserSlice';
import tokenReducer from '../features/TokenSlice';
import playlistReducer from '../features/PlaylistSlice';
import searchReducer from '../features/SearchSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        token: tokenReducer,
        playlist: playlistReducer,
        search: searchReducer,
    }
})
