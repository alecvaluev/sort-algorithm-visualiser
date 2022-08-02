import { createSlice } from '@reduxjs/toolkit';

// Slice Object
///////////////////////////////////////
const options = {
    name: 'array',
    initialState: [],
    reducers: {
        setArray: (state, action) => {
            return action.payload;
        },
         clearArray: (state, action) => {
            return [];
        }
    }
}

export const arraySlice = createSlice(options);

// Selectors
///////////////////////////////////////
export const selectArrayState = (state) => state.array;

// Exports
///////////////////////////////////////
export const {
    setArray,
    clearArray
} = arraySlice.actions;

export default arraySlice.reducer;