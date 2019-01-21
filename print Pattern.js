function printPAttern(count) {
    var prev = "1";
    while (count-- > 0) {
        var length = prev.length;
        var start = 0
          , size = 0
          , prevchar = prev[start]
          , newStr = "";
        while (length--) {
            if (prev[start++] === prevchar) {
                size++;
            } else {
                newStr += size + "" + prevchar;
                prevchar = prev[start-1];
                size = 1;
            }
        }
        newStr += (size === 0 ? 1 : size) + "" + prevchar;
        console.log(newStr);
        prev = newStr;
    }
}
