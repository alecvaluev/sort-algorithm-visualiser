import { swapping } from '../utils';

const getQuickSort = (array) => {
    let copyArr = array.slice();
    const frames = [];

    console.log('quick sort start', copyArr)

    if(array.length > 1) quickSort(copyArr, 0, array.length - 1, frames);
    else return array;
    console.log('quick sort finished', copyArr);

    return frames;
}

const quickSort = (array, start, end, frames) => {
    if(array.length > 1){
        let pivot = partition(array, start, end, frames);

        if (start < pivot - 1) quickSort(array, start, pivot - 1, frames);
        if (pivot < end) quickSort(array, pivot, end, frames);
    }
}

const partition = (array, start, end, frames) => {
    let pivotIdx = Math.floor((start + end) / 2),
        pivot = array[pivotIdx],  //choose pivot at the middle
        left = start,     //left pointer
        right = end;  //right pointer

        //display pivot
        frames.push([pivotIdx]);
        //display comparing cols
        frames.push([left, right]);

        while(left <= right){
            while(array[left] < pivot) {
                left++;
                //display comparing cols
                frames.push([left, right]);
            }
            while(array[right] > pivot) {
                right--;
                //display comparing cols
                frames.push([left, right]);
            }
            if(left <= right){
                //display changing cols
                frames.push([left, right, true]);

                swapping(array, left, right);
                //display changed array
                frames.push(array.slice());
                //cancel displaying changing cols 
                frames.push([]);
                
                left++;
                right--;
                //display comparing cols
                frames.push([left, right]);
            }
        }
        return left;
}

export default getQuickSort;