
import bubbleSort from '../sorting-algorithms/bubble/bubble';
import insertionSort from '../sorting-algorithms/insertion/insertion';
import selectionSort from '../sorting-algorithms/selection/selection';
import mergeSort from '../sorting-algorithms/merge/merge';
import quickSort from '../sorting-algorithms/quick/quick';

export default [
    {
      name: 'Bubble Sort',
      sortFunc: bubbleSort 
    },
    {
      name: 'Insertion Sort',
      sortFunc: insertionSort
    },
    {
      name: 'Merge Sort',
      sortFunc: mergeSort
    },
    {
      name: 'Quick Sort',
      sortFunc: quickSort
    },
    {
      name: 'Selection Sort',
      sortFunc: selectionSort
    }
  ]