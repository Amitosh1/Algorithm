function countZeroes(arr, start=0, end=arr.length - 1, length=0) {
    if (arr[start] === 0) {
        return length + 1 + (end - start);
    } else if (arr[end] === 1) {
        return length;
    } else {
        var mid = start + Math.floor((end - start) / 2);
        if (arr[mid] === 1) {
            return countZeroes(arr, start = mid + 1, end, length);
        } else {
            var length2 = (end - mid) + 1;
            return countZeroes(arr, start, end = mid - 1, length2);
        }

    }
}
