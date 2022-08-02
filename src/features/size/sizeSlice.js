import { createSlice } from '@reduxjs/toolkit';

const ARRAY_SIZE_DEFAULT = 10;

// Slice Object
///////////////////////////////////////
const options = {
    name: 'size',
    initialState: ARRAY_SIZE_DEFAULT,
    reducers: {
        setSize: (state, action) => {
            return action.payload;
        },
        resetSize: (state, action) => {
            return ARRAY_SIZE_DEFAULT;
        }
    }
}

export const sizeSlice = createSlice(options);

// Selectors
///////////////////////////////////////
export const selectSizeState = (state) => state.size;

// Exports
///////////////////////////////////////
export const {
    setSize,
    resetSize
} = sizeSlice.actions;

export default sizeSlice.reducer;