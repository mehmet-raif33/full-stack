import { configureStore } from '@reduxjs/toolkit';
import countryData from './slices/countrySlice';
import signInSignUpSlice from './slices/userSlice';

export const veriDeposu = configureStore({
    reducer: {
        userInfo: signInSignUpSlice,
        countryData: countryData
    }
})