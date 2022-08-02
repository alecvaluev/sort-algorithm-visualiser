import { createSlice } from '@reduxjs/toolkit';

// Slice Object
///////////////////////////////////////
const options = {
    name: 'pivot',
    initialState: -1,
    reducers: {
        setPivot: (state, action) => {
            if(Array.isArray(action.payload)) return action.payload[0];
            return action.payload;
        },
        resetPivot: (state, action) => {
            return -1;
        }
    }
}

export const pivotSlice = createSlice(options);

// Selectors
///////////////////////////////////////
export const selectPivot = (state) => state.pivot;

// Exports
///////////////////////////////////////
export const {
    setPivot,
    resetPivot
} = pivotSlice.actions;

export default pivotSlice.reducer;