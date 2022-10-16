import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const signInSignUp = createAsyncThunk('signInSignUp', async (actionData) => {
    let response = await axios.post('http://localhost:3001/user/signInSignUp',actionData)
    return response;
})

const emptyInfo = {
    mail: '',
    name: '',
    surname: '',
    username: ''
}

export const signInSignUpSlice = createSlice({
    name: 'signInSignUp',
    initialState: {
        info: {
            username: '',
            name: '',
            surname: '',
            mail: '',
            password: '',
            imgUrl: ''
        },
        state: {
            isHere: false,
            loading: false
        }
    },
    reducers: {
        logout: (state, action) => {
            state.info = emptyInfo;
            state.state.isHere = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signInSignUp.pending, (state, action) => {
            state.state.loading = true
        })
        builder.addCase(signInSignUp.fulfilled, (state, action) => {
            if(action.payload.data.responseType === 'login'){
                let newUser = {
                    username: action.payload.data.username, 
                    name: action.payload.data.name,
                    surname: action.payload.data.surname,
                    mail: action.payload.data.mail,
                    password: action.payload.data.password,
                    imgUrl: action.payload.data.imgUrl
                }
                state.info = newUser;
                state.state.isHere= true;
                state.state.loading = false
            } else {
                let newUser = {
                    username: action.payload.data.username, 
                    name: action.payload.data.name,
                    surname: action.payload.data.surname,
                    mail: action.payload.data.mail,
                    password: action.payload.data.password,
                    imgUrl: action.payload.data.imgUrl
                }
                state.info = newUser;
                state.state.isHere= true;
                state.state.loading = false
            }
            
        })
        builder.addCase(signInSignUp.rejected, (state, action) => {
            console.log('We have a Problem Here!!')
            state.state.loading = false;
        })
    }
});

export default signInSignUpSlice.reducer;
export const { logout } = signInSignUpSlice.actions;