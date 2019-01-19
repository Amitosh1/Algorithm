function getdigitatindex(number, ntn) {
    //console.log('getdigitatindex==',Number(String(number).charAt(String(number).length - ntn - 1)),ntn,number);
    return Number(String(number).charAt(String(number).length - ntn - 1));
}

function getDigit(number) {
    return Math.floor(Math.log10(number)) + 1;
}

function maxDigit(numArray) {
    let max = 0;
    for (var i = 0; i < numArray.length; i++) {
        max = Math.max(max, getDigit(numArray[i]));
    }

    return max;
}

function flatten(array, target=[]) {
    //console.log(array, '---', target);
    for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            flatten(array[i], target);
        } else {
            array[i] && target.push(array[i]);
        }
    }
    return target;
}

function redixSort(numArray) {
    var maxdigi = maxDigit(numArray);
    //console.log('maxdigi========', maxdigi);
    for (var i = 0; i < maxdigi; i++) {
        var array = [];
        //console.log('iteration -----------------',i);
        for (var j = 0; j < numArray.length; j++) {
            var digit = getdigitatindex(numArray[j], i);
            //console.log(i, digit, numArray[j]);
            if (!array[digit]) {
                array[digit] = [numArray[j]];
            } else {
                array[digit].push(numArray[j]);
            }
        }
        //console.log('calling flatten on', JSON.stringify(array));
        numArray = flatten(array);
        //console.log('flattened Array---------', numArray);

    }
   return numArray;
}

var a = [100,4, 2, 6, 3, 9, 7, 8, 1, 5, 13, 15, 10, 20, 37, 11];
redixSort(a);
//a;
//getdigitatindex(17, 2);
