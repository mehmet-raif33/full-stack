import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './slices/userInfo'

const Store = configureStore({
    reducer: {
        userslice : UserSlice
    }
});

export default Store;