import { createSlice } from '@reduxjs/toolkit';

// Slice Object
///////////////////////////////////////
const options = {
    name: 'darkMode',
    initialState: true,
    reducers: {
        toggle: (state, action) => {
            return action.payload;
        }
    }
}

export const darkModeSlice = createSlice(options);


// Selectors
///////////////////////////////////////
export const selectDarkMode = (state) => state.darkMode;

// Exports
///////////////////////////////////////
export const {
    toggle
} = darkModeSlice.actions;

export default darkModeSlice.reducer;