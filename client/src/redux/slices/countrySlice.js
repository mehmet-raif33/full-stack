import { createSlice } from "@reduxjs/toolkit";

export const countryData = createSlice({
    name: 'countryData',
    initialState: [
        {
            name:'sad'
        }
    ],
    reducers: {
        search: (state, action) => {
            
        },
        add: (state, action) => {

        }
    }
});

export default countryData.reducer;
export const { search , add } = countryData.actions;