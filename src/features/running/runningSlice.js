import { createSlice } from '@reduxjs/toolkit';

// Slice Object
///////////////////////////////////////
const options = {
    name: 'running',
    initialState: false,
    reducers: {
        setRunning: (state, action) => {
            return action.payload;
        },
    }
}

export const runningSlice = createSlice(options);

// Selectors
///////////////////////////////////////
export const selectRunningState = (state) => state.running;

// Exports
///////////////////////////////////////
export const {
    setRunning
} = runningSlice.actions;

export default runningSlice.reducer;