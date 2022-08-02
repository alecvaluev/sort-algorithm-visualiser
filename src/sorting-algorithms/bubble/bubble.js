import { swapping } from '../utils';

const getBubbleSort = (array) => {
    const frames = [];
    const copyArr = array.slice();
    let isSwapped = true;
    console.log('arr', array);

    for(let i = 0; i < copyArr.length - 1; i++){
        for(let j = 0; j < copyArr.length - i - 1; j++){
            //display comparing cols 
            frames.push([j, j + 1]); //compare color on

            if(copyArr[j] > copyArr[j + 1]){
                //display changing cols 
                frames.push([j, j + 1, true]);

                swapping(copyArr, j, j + 1);
                //display new, changed array
                frames.push(copyArr.slice());
                //[] indicates to erase swapping indixes 
                frames.push([])

                isSwapped = true;
            }
            if(!isSwapped) break;
        }
    }
    console.log('sorted', copyArr)
    console.log('frames', frames);
    return frames;
}

export default getBubbleSort;
