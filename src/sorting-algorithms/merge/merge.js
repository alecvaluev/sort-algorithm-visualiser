const getMergeSort = (array) => {
    const frames = [];
    
    const copyArr = array.slice();
    const mainArr = array.slice();

    mergeSort(mainArr, 0, mainArr.length - 1, copyArr, frames);

    console.log('original', array);
    console.log('copy', copyArr)
    console.log('main copy', mainArr);
    console.log('frames', frames);
    return frames;
  }
  
  function mergeSort(array, start, end, copyArr, frames) {
    if (start === end) return;
    const middle = Math.floor((start + end) / 2);

    mergeSort(copyArr, start, middle, array, frames);
    mergeSort(copyArr, middle + 1, end, array, frames);
    merging(array, start, middle, end, copyArr, frames);
  }
  
  function merging(array, start, middle, end, copyArr, frames) {
    let k = start;
    let i = start;
    let j = middle + 1;
    while (i <= middle && j <= end) {
      //display comparing cols
      frames.push([i, j]);

      if (copyArr[i] <= copyArr[j]) {
        //display changing cols
        frames.push([k, i, true]);

        array[k++] = copyArr[i++];

        frames.push(array.slice());
        frames.push([]);
      } else {
        //display changing cols
        frames.push([k, j, true]);
        
        array[k++] = copyArr[j++];

        frames.push(array.slice());
        frames.push([]);
      }
    }
    while (i <= middle) {
      frames.push([i, middle]);

      //display changing cols
      frames.push([k, i, true]);

      array[k++] = copyArr[i++];

      frames.push(array.slice());
      frames.push([]);
    }
    while (j <= end) {
      frames.push([j, end]);
      //display changing cols
      frames.push([k, j, true]);

      array[k++] = copyArr[j++];

      frames.push(array.slice());
      frames.push([]);
    }
  }

  export default getMergeSort;
  