import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../features/UserSlice';
import { tokenSlice} from '../features/TokenSlice';

export default configureStore({
    reducer: {
        user: userSlice.reducer,
        token: tokenSlice.reducer,
    }
})
