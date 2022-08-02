import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from '../features/darkMode/darkModeSlice';
import sizeReducer from '../features/size/sizeSlice';
import speedReducer from '../features/speed/speedSlice';
import arrayReducer from '../features/array/arraySlicer';
import framesReducer from '../features/frames/framesSlice';
import runningReducer from '../features/running/runningSlice';
import comparePairReducer from '../features/comparePair/comparePairSlice';
import swapPairReducer from '../features/swapPair/swapPairSlice';
import pivotReducer from '../features/pivot/pivotSlice';

export default configureStore({
    reducer: {
        darkMode: darkModeReducer,
        array: arrayReducer,
        frames: framesReducer,
        speed: speedReducer,
        size: sizeReducer,
        running: runningReducer,
        comparePair: comparePairReducer,
        swapPair: swapPairReducer,
        pivot: pivotReducer
    }
})