import { configureStore } from '@reduxjs/toolkit';
import userInfo from './slices/userInfo';

export const veriDeposu = configureStore({
    reducer: {
        userInfoData : userInfo
    }
})