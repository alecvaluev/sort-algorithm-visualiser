import { createSlice } from '@reduxjs/toolkit';

// Slice Object
///////////////////////////////////////
const options = {
    name: 'frames',
    initialState: [],
    reducers: {
        setFrames: (state, action) => {
            return action.payload;
        },
        clearFrames: (state, action) => {
            return [];
        }
    }
}

export const framesSlice = createSlice(options);

// Selectors
///////////////////////////////////////
export const selectFramesState = (state) => state.frames;

// Exports
///////////////////////////////////////
export const {
    setFrames,
    clearFrames
} = framesSlice.actions;

export default framesSlice.reducer;