import { setArray } from '../features/array/arraySlicer';
import { setComparePair, clearComparePair } from '../features/comparePair/comparePairSlice';
import { setSwapPair } from '../features/swapPair/swapPairSlice';
import { setPivot, resetPivot } from '../features/pivot/pivotSlice';
import { setRunning } from '../features/running/runningSlice';


//function generates new values depending on height and size and pushes them into storage array
export const createArray = (paramObj) => {
    const {dispatch, size, height} = paramObj;

    const array = [];
    for(let i = 0; i < size; i++) {
      let randomNum = Math.floor(Math.random() * (height * 0.7) + 1);
      array.push(randomNum); 
    }
    dispatch(setArray(array));
}

//the function swaps two values in the given array
export const swapping = (array, firstIdx, secondIdx) => {
    let temp = array[firstIdx];
    array[firstIdx] = array[secondIdx];
    array[secondIdx] = temp;
}

//the function executes the sorting funciton and generates frames for animation
export const createFrames = (dispatch, array, sortingAlgorithm, speed) => {
    const frames = sortingAlgorithm(array);
    displayFrames(dispatch, frames, speed);
}

//the function displays the animation from the given frames with specified speed
export const displayFrames = (dispatch, frames, speed) => {
    for(let i = 0; i < frames.length; i++){
      const frameLength = frames[i].length;
      //set function depending on the length of the frame
      /////each length has its own purpose/////
      const executeFunc = frameLength === 1 ?
                          setPivot : frameLength === 2 ?
                                  setComparePair : frameLength === 3 || frameLength === 0?
                                                              setSwapPair : frameLength > 3 ?
                                                                        setArray : null;

      if(executeFunc){
        setTimeout(() => {
          dispatch(executeFunc(frames[i]));
        }, i * speed);
      } 
      //clean after all frames are executed
      if(i === frames.length - 1){
        console.log('cleaning');
        setTimeout(() => {
          dispatch(clearComparePair());
          dispatch(resetPivot());
          dispatch(setRunning(false));
        }, i * speed);
      }
    }
  }
