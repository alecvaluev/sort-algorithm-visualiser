// frame structure
// currentValue, compIdx1, compIdx2
const getInsertionSort = (array) => {
    const frames = [];
    let copyArr = array.slice();

    let currValue, i, j;
    for(i = 1; i < array.length; i++){
        currValue = copyArr[i];
        
        //display pivot 
        frames.push([i]);
        //display comparing cols
        //if(j > 0) frames.push([j, j - 1]);

        for(j = i; j > 0 && copyArr[j - 1] > currValue; j--){
        
            frames.push([j, j - 1]);
            //display changing cols
            frames.push([j, j - 1, true]); // we dont't change the 1st value, only the second!!!
            copyArr[j] = copyArr[j - 1];

            //display new array
            frames.push(copyArr.slice());
            //cancel changing
            frames.push([]);
        }
        copyArr[j] = currValue;
        //display changing the pivot
        frames.push([j]);
        //display new array
        frames.push(copyArr.slice());
    }

    console.log('sorted', copyArr)
    console.log('frames', frames);
    return frames;
}

export default getInsertionSort;