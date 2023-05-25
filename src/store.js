import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducer.js';
import connectionReduce from './reducer.js';

export default configureStore({
    reducer: {
        user: userReducer,
    }
})