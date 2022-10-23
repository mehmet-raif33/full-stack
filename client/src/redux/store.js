import { configureStore } from '@reduxjs/toolkit';
import signInSignUpSlice from './slices/userSlice';

export const veriDeposu = configureStore({
    reducer: {
        userInfo: signInSignUpSlice
    }
})