import React, { useState } from 'react';
//import redux storage
import { useSelector, useDispatch } from 'react-redux';
import { selectRunningState, setRunning } from '../features/running/runningSlice';
import { selectSpeedState } from '../features/speed/speedSlice';
import { selectArrayState } from '../features/array/arraySlicer';
//import helper function
import { createFrames } from '../sorting-algorithms/utils';

/*
params:
    name - shows the name on the button
    callFunction - executed on button click. I the  function is sorting function the passed further, otherwise executed directly
    outline - boolean value indicates the type of button
    notSorting - boolean value indicates if the purpose of the button is to call sorting algorithm or any other regular function
*/
export default function Button({name, callFunction, outline = false, notSorting = false}){
    const dispatch = useDispatch();

    const isRunning = useSelector(selectRunningState);
    const array = useSelector(selectArrayState);
    const speed = useSelector(selectSpeedState);

    const [isHovered, setIsHovered] = useState(false);
    const color = isRunning? '#686868' : isHovered === outline? '#fff' : 'orange';

    return (
        <div className='fw-bold rounded p-3'
                style={{
                    color: color,
                    backgroundColor: outline ? (isRunning ? null: isHovered ? 'orange': null): null ,
                    textDecoration: isHovered && !isRunning && !outline? 'underline': null,
                    cursor: isRunning ? null : "pointer",
                    border: outline ? `2px solid ${color}`: null 
                }}
            onClick={() => {
                if(notSorting){
                    callFunction();
                }
                else if(!isRunning){
                    dispatch(setRunning(true));
                    createFrames(dispatch, array, callFunction, speed);
                }
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >{name}</div>
    )
}