import { swapping } from '../utils';

export const getSelectionSort = (array) => {
    const frames = [];
    
    let copyArr = array.slice();
    let min;

    for(let i = 0; i < copyArr.length - 1; i++){
        min = i;
        //display min as pivot
        frames.push([min]);

        for(let j = i + 1; j < copyArr.length; j++){
            //display comparing cols
            frames.push([min, j]);

            if(copyArr[j] < copyArr[min]) {
                min = j;
                //display changed min as pivot
                frames.push([min]);
            }
        }
        //display comparing cols
        frames.push([min, i]);

        if(min !== i){
            //display changed cols
            frames.push([min, i, true]);

            swapping(copyArr, min, i);
            //display changed array
            frames.push(copyArr.slice());
            //cancel the display 
            frames.push([])
        }
    }

    console.log('sorted', copyArr)
    console.log('frames', frames);
    return frames;
}

export default getSelectionSort;