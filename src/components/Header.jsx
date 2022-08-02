import React  from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import components
import Button from './Button.jsx';
import PaletteBox from './PaletteBox.jsx';
//import sorting algorithms & constants
import dataStructures from '../data/dataStructures';
import { colors, darkModeSettings} from '../data/constants';
//import redux storage
import { setSize, selectSizeState } from '../features/size/sizeSlice.js';
import { setSpeed, selectSpeedState } from '../features/speed/speedSlice.js';
import { selectRunningState } from '../features/running/runningSlice';
import { selectDarkMode } from '../features/darkMode/darkModeSlice';
//import helper function
import { createArray } from '../sorting-algorithms/utils';

export default function Header(){
    const dispatch = useDispatch();

    const isRunning = useSelector(selectRunningState);
    const speed = useSelector(selectSpeedState);
    const size = useSelector(selectSizeState);
    const darkMode = useSelector(selectDarkMode);
    
    //set text to light/dark mode
    const setText = darkMode? darkModeSettings.darkTextColor : darkModeSettings.defaultTextColor;

    //set new size and create new array
    const handleSize = (e) => {
        dispatch(setSize(e.target.value));
        createArray(dispatch, window.innerHeight, size);
    }
    //set new algorithm speed
    const handleSpeed = (e) => {
        dispatch(setSpeed(e.target.value))
    }
    
    return (
        <div style={{color: '#fff', backgroundColor: darkMode? darkModeSettings.darkBackgroundColorAlternative : darkModeSettings.defaultBackgroundColorAlternative}}>
            <div className='d-flex justify-content-around py-4 fw-bold'>
                <div className='text-end'>
                <div>
                    <label className='pe-3'>Array Size</label>
                    <input type='range' min='3' max='100' value={size} onChange={handleSize} disabled={isRunning}/>
                </div>
                <div>
                    <label className='pe-3'>Algorithm Speed</label>
                    <input type='range' min='0.5' max='150' step='0.5' value={speed} onChange={handleSpeed} disabled={isRunning}/>
                </div>
                </div>
                {
                    dataStructures.map((structure, idx) =>  <Button key={idx} name={structure.name} callFunction={structure.sortFunc} />)
                }
            </div>

            <div className='d-flex justify-content-center mb-2' style={{color: setText}}>
                <div className='d-flex px-2'><PaletteBox color={colors.PRIMARY_COLOR}/>Main</div>
                <div className='d-flex px-2'><PaletteBox color={colors.COMPARE_COLOR}/>Comparing</div>
                <div className='d-flex px-2'><PaletteBox color={colors.CHANGE_COLOR}/>Changing</div>
                <div className='d-flex px-2'><PaletteBox color={colors.POINTER_COLOR}/>Pointer</div>
            </div>

            <div
                style={{height: '2px', 
                        backgroundColor: darkModeSettings.defaultHighlight, 
                        width: '60vw',
                        margin: 'auto'
                        }}></div>
        </div>
    )
}