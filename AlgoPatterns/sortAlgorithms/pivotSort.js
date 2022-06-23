const pivot = (arr, start = 0, end= arr.length - 1){
    const swap = (array, i, j) => {
        [array[i], array[j]] = [array[j], array[i]]
    }

    let pivot = arr[start];
    let swapidx = start;
    for(let i = start + 1; i< arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapidx, i)
        }
    }
    swap(arr, start, swapidx);
    return swapidx;
}
pivot([4,8,2,1,5,7,6,3])

//Quicksort
const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if(left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left 
    quickSort(arr, left, pivotIndex -1);
    //right
    quickSort(arr, pivotIndex + 1, right);
    }
    return arr
}
