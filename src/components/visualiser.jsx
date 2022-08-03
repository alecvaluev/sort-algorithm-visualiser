import React, { useEffect } from 'react';
//import components
import Button from './Button.jsx';
import Header from './Header';
//import constants
import { colors, darkModeSettings} from '../data/constants';

//import redux storage
import { useSelector, useDispatch } from 'react-redux';
import { toggle, selectDarkMode } from '../features/darkMode/darkModeSlice';
import { selectArrayState} from '../features/array/arraySlicer';
import { selectSizeState } from '../features/size/sizeSlice.js';
import { selectSwapPair } from '../features/swapPair/swapPairSlice.js';
import { selectComparePair } from '../features/comparePair/comparePairSlice.js';
import { selectPivot } from '../features/pivot/pivotSlice.js';
import { createArray } from '../sorting-algorithms/utils';


export default function Visualiser() {
    const dispatch = useDispatch();
  
    const screenDimensions = {
          height: window.innerHeight,
          width: window.innerWidth
    };
    const array = useSelector(selectArrayState);
    const size = useSelector(selectSizeState);
    const swapPair = useSelector(selectSwapPair);
    const comparePair = useSelector(selectComparePair);
    const pivot = useSelector(selectPivot);
    const darkMode = useSelector(selectDarkMode);

    const setBackground = darkMode? darkModeSettings.darkBackgroundColor : darkModeSettings.defaultBackgroundColor;

    const funcParams = {dispatch: dispatch, 
      size: size,
      height: screenDimensions.height
    }
    useEffect(() => {
      createArray(funcParams);
    }, []);

    console.log('dark', darkMode)
    return (
        <div style={{backgroundColor: setBackground, height: '100vh'}}>
            <Header createArray={createArray} paramObj={funcParams}/>

            {/* main body */}
            <div  
              style={{backgroundColor: setBackground, height: '100%'}}>
              <div className='position-absolute bottom-0 start-50 translate-middle-x w-75 mb-5'>
              {
                array.map((value, idx) => {
                  const barColor = swapPair.includes(idx) ? 
                                    colors.CHANGE_COLOR : comparePair.includes(idx) ?
                                                            colors.COMPARE_COLOR: pivot === idx ?
                                                                             colors.POINTER_COLOR : colors.PRIMARY_COLOR;
                  return (
                    <div
                      className="d-inline-block"
                      key={idx}
                      style={{
                        backgroundColor: barColor,
                        height: `${value}px`,
                        width: `${(screenDimensions.width * 0.6) / size }px`
                      }}></div>
                  )
                })
              }
              </div>
            </div>

            <div className='position-absolute bottom-0 end-0 mb-5 me-5'>
              <Button name='Create New Array' callFunction={createArray} funcParamObj={funcParams} outline={true} notSorting={true}/>
              <div className='mt-3 p-2 rounded float-right'
                    style={{
                      backgroundColor: darkMode? '#FFD700': 'purple',
                      color: darkMode? '#000' : '#fff',
                      width: 'min-content'
                    }}
                   onClick={() => {dispatch(toggle(!darkMode))}}>{darkMode? 'LightMode': 'DarkMode'}</div>
            </div>

        </div>
    )
}
