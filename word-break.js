/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
/*var wordBreak = function(s, wordDict) {

    function checkWord(str) {
        if (str.length === 0 || wordDict.indexOf(str) >= 0)
            return true;
        const wordList = wordDict.filter(word=>str.indexOf(word) === 0).sort((a,b)=>b.length - a.length);
        return wordList.some(word=>{
            return checkWord(str.slice(word.length))
        }
        )
    }

    return checkWord(s);

};*/

var wordBreak = function(s, wordDict) {
    var bools = []
      , i = 1;
    bools[0] = true;
    while (i <= s.length) {
        wordDict.forEach(word=>{
            if (word.length <= i) {
                //console.log(i, word, i - word.length, bools[i - word.length], (s.substr(i - word.length, word.length) === word));
                if (bools[i - word.length] && s.substr(i - word.length, word.length) === word) {
                    bools[i] = true;
                }
            }
        }
        );
        i++;
    }
    //console.log(s.length, bools);
    return !!bools[s.length];

}
