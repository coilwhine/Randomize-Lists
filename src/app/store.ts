import { configureStore } from '@reduxjs/toolkit';
import listsReducer from './listsSlice'
import authReducer from './authSlice'

export default configureStore({
    reducer: {
        lists: listsReducer,
        auth: authReducer
    }
})