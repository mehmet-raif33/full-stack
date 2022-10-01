import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const postMyUserDataFromApi = createAsyncThunk('postMyUserDataFromApi', async (datam) => {
    const veri = await axios.post('http://localhost/5000/api/login',datam)
    return veri.data();
})

const Userslice = createSlice({
    name: 'userSlice',
    initialState: {
        name: null,
        surname: null,
        mail: null,
        password: null,
        someoneIsHere: false,
        specialData : {
            loading: false
        }
    },
    reducers: {},
    extraReducers : (builder) => {
        builder.addCase(postMyUserDataFromApi.pending,(state,action) => {
            state.specialData.loading = true
        }),
        builder.addCase(postMyUserDataFromApi.fulfilled,(state,action) => {
            state.specialData.loading = false
            let human = action.payload;
            state.name = human.name
            state.surname = human.surname
            state.mail = human.mail
            state.password = human.password
        }),
        builder.addCase(postMyUserDataFromApi.rejected,(state,action) => {
            
        })
    }
});

export default Userslice.reducer;