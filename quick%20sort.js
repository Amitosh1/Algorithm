//quick sort
function pivot(arr, start, end) {
    var swapIdx = start
      , pivot3 = arr[start];
    var tmp = undefined;
    for (var i = start + 1; i < end; i++) {
        if (arr[i] <= pivot3) {
            swapIdx += 1;
            tmp = arr[swapIdx];
            arr[swapIdx] = arr[i]
            arr[i] = tmp;
        }
    }
    arr[start] = arr[swapIdx];
    arr[swapIdx] = pivot3;
    return swapIdx;
}

function quickSort(arr2, start, end) {
    if (start === end)
        return;
    var pivot2 = pivot(arr2, start, end);
    if (pivot2 === start) {
        quickSort(arr2, start + 1, end);
    } else if (pivot2 === end) {
        quickSort(arr2, start, end);
    } else {
        quickSort(arr2, start, pivot2);
        quickSort(arr2, pivot2 + 1, end);
    }
    return arr2;
}

var arr = [8, 8, 3, 1, 9, 6, 8, 2, 8];
console.log(arr);
quickSort(arr, 0, arr.length);
arr;
