import { createSlice } from '@reduxjs/toolkit';

const SPEED_DEFAULT = 50;

// Slice Object
///////////////////////////////////////
const options = {
    name: 'speed',
    initialState: SPEED_DEFAULT,
    reducers: {
        setSpeed: (state, action) => {
            return action.payload;
        },
        resetSpeed: (state, action) => {
            return SPEED_DEFAULT;
        }
    }
}

export const speedSlice = createSlice(options);

// Selectors
///////////////////////////////////////
export const selectSpeedState = (state) => state.speed;

// Exports
///////////////////////////////////////
export const {
    setSpeed,
    resetSpeed
} = speedSlice.actions;

export default speedSlice.reducer;