function BS(arr, num, start, end) {
    if (arr[start] === num)
        return start;
    if (arr[end] === num)
        return end;
    if (end <= start)
        return -1
    var mid = start + Math.floor((end - start) / 2);
    if (num === arr[mid])
        return mid;
    if (num > arr[mid])
        return BS(arr, num, mid, end);
    if (num < arr[mid])
        return BS(arr, num, start, mid);
}

function BSRev(arr, num, start, end) {
    if (arr[start] === num)
        return start;
    if (arr[end] === num)
        return end;
    if (end <= start)
        return -1
    var mid = start + Math.floor((end - start) / 2);
    if (num === arr[mid])
        return mid;
    if (num > arr[mid])
        return BSRev(arr, num, start, mid);
    if (num < arr[mid])
        return BSRev(arr, num, mid, end);
}

function findRotatedIndex(arr, num, start=0, end=arr.length - 1) {
    if (arr[start] === num)
        return start;
    if (arr[end] === num)
        return end;
    if (end < start)
        return -1;    
    if (num < arr[start] && num > arr[end])
        return -1;
    var mid = start + Math.floor((end - start) / 2);
    if(mid === start && arr[mid] !== num) return -1;
    if (arr[mid] === num)
        return mid;
    else {
        if (arr[mid] > arr[start] && (num < arr[start] && num > arr[mid]))
            return -1;
        else if (arr[mid] > arr[start]) {
            if (num > arr[start] && num < arr[mid])
                return BS(arr, num, start, mid);
            else
                return findRotatedIndex(arr, num, mid + 1, end);
        } else if (arr[mid] < arr[start]) {
            if (num > arr[mid] && num<arr[end])
                return BSRev(arr, num, mid, end);
            else {
                return findRotatedIndex(arr, num, start, mid - 1);
            }
        }
    }
}
