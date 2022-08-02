import { createSlice } from '@reduxjs/toolkit';

// Slice Object
///////////////////////////////////////
const options = {
    name: 'comparePair',
    initialState: [],
    reducers: {
        setComparePair: (state, action) => {
            return action.payload;
        },
        clearComparePair: (state, action) => {
            return [];
        }
    }
}

export const comparePairSlice = createSlice(options);

// Selectors
///////////////////////////////////////
export const selectComparePair = (state) => state.comparePair;

// Exports
///////////////////////////////////////
export const {
    setComparePair,
    clearComparePair,
} = comparePairSlice.actions;

export default comparePairSlice.reducer;