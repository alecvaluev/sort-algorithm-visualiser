import { createSlice } from '@reduxjs/toolkit';

// Slice Object
///////////////////////////////////////
const options = {
    name: 'swapPair',
    initialState: [],
    reducers: {
        setSwapPair: (state, action) => {
            return action.payload;
        },
        clearSwapPair: (state, action) => {
            return [];
        }
        
    }
}

export const swapPairSlice = createSlice(options);

// Selectors
///////////////////////////////////////
export const selectSwapPair = (state) => state.swapPair;

// Exports
///////////////////////////////////////
export const {
    setSwapPair,
    clearSwapPair,
} = swapPairSlice.actions;

export default swapPairSlice.reducer;