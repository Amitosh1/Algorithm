function createSpiral(num) {
    var arr = []
      , max = num * num
      , row = 0
      , col = 0
      , count = 1
      , direction = 'RIGHT';
    function getIndx(row=0, col=0) {
        if (direction === 'RIGHT') {
            if ((col % num === num - 1) || !!arr[row][col + 1]) {
                direction = 'DOWN'
                return [row + 1, col]
            } else {
                return [row, col + 1]
            }
        } else if (direction === 'DOWN') {
            if ((row % num === num - 1) || (arr[row + 1] && !!arr[row + 1][col])) {
                direction = 'LEFT'
                return [row, col - 1]
            } else {
                return [row + 1, col]
            }
        } else if (direction === 'LEFT') {
            if ((col % num === 0) || !!arr[row - 1][col - 1]) {
                direction = 'UP'
                return [row - 1, col]
            } else {
                return [row, col - 1]
            }
        } else if (direction === 'UP') {
            if ((row % num === 0) || !!arr[row - 1][col]) {
                direction = 'RIGHT'
                return [row, col + 1]
            } else {
                return [row - 1, col]
            }
        }

    }
    arr[0]=[];
    arr[0][0] = 1;
    while (--max > 0) {
        var nxtIndx = getIndx(row, col);
        row = nxtIndx[0],
        col = nxtIndx[1];
        if (!arr[row])
            arr[row] = [];
        arr[row][col] = ++count;
    }
    return arr;
}
