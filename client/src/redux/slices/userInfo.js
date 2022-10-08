import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import {axios} from 'axios';

export const addUser = createAsyncThunk('postUserData', async(newUser) => {
    const data = await axios.post('http://localhost:3001/save-new-person',newUser)
    return data;
})

const UserSlice = createSlice({
    name:'userData',
    initialState : {
        image: ''
    },
    reducers:{
        logout: (state , action) => {
            state = action.payload;
        },
        changeToImage: (state , action) => {
            state.profileImage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addUser.pending, (state, action) => {
            state.loading = true
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.loading = false
            state = action.payload
        });
        builder.addCase(addUser.rejected, (state, action) => {
            state.isHere = action.payload
        })
    }
})

export const { logout , changeToImage } = UserSlice.actions;
export default UserSlice.reducer;