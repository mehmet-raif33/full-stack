import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const signInSignUp = createAsyncThunk('signInSignUp', async (actionData) => {
        let response = await axios.post('http://localhost:3001/user/signInSignUp', actionData)
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
            loading: false,
            errorMessage: "Wrong mail or password! Please check you account information!!",
            stateCodeOflogin: 2,
            stateCodeOfRegister: 2,
        }
    },
    reducers: {
        logout: (state, action) => {
            state.info = emptyInfo;
            state.state.isHere = false;
            state.state.stateCodeOfRegister = 2;
            state.state.stateCodeOflogin = 2;
            localStorage.removeItem('userIsHere');
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signInSignUp.pending, (state, action) => {
            state.state.loading = true
        })
        builder.addCase(signInSignUp.fulfilled, (state, action) => {
            if(action.payload.data.responseType === 'login'){
                if (action.payload.data.statecode === 0){
                    state.state.stateCodeOflogin = 0;
                    console.log('hata hata');
                    state.state.loading = false;
                } else{
                    let newUser = {
                        username: action.payload.data.username, 
                        name: action.payload.data.name,
                        surname: action.payload.data.surname,
                        mail: action.payload.data.mail,
                        password: action.payload.data.password,
                        imgUrl: action.payload.data.imgUrl
                    }
                    state.info = newUser;
                    state.state.stateCodeOflogin = 1;
                    state.state.isHere= true;
                    state.state.loading = false
                    localStorage.setItem('userIsHere',action.payload.data.jwt);
                }
                
            } else if(action.payload.data.responseType === 'register') {
                if (action.payload.data.statecode === 0){
                    if (action.payload.data.errorCase === 'mail') {
                        state.state.stateCodeOfRegister = 0;
                        state.state.errorMessage = action.payload.data.message;
                        state.state.loading = false;  
                    } else {
                        state.state.stateCodeOfRegister = 0;
                        state.state.errorMessage = action.payload.data.message;
                        state.state.loading = false;
                    }
                    
                } else{
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
                    state.state.stateCodeOfRegister = 1;
                    localStorage.setItem('userIsHere',action.payload.data.jwt);
                }
            } else{
                let newUser = {
                    username: action.payload.data.username, 
                    name: action.payload.data.name,
                    surname: action.payload.data.surname,
                    mail: action.payload.data.mail,
                    password: action.payload.data.password,
                    imgUrl: action.payload.data.imgUrl
                }
                state.info = newUser;
                state.state.stateCodeOflogin = 1;
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