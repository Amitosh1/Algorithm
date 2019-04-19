/** https://leetcode.com/problems/word-ladder/
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

var ladderLength = function(beginWord, endWord, wordList) {
    var visited = {};
    visited[0] = [beginWord];
    function isSinglematched(word1, word2) {
        var len = word1.length
          , diff = 0;
        while (len--) {
            word1[len] !== word2[len] && diff++
        }
        return diff === 1;
    }
    var changes = 0;
    var done = false;
    var endLevel = 0;
    function solve(level) {
        var remaining = [];
        !done && wordList.forEach(word=>{
            var wordMatched = false;
            word !== beginWord && visited[level].forEach(elem=>{
                if (!wordMatched && isSinglematched(elem, word)) {
                    visited[level + 1] = visited[level + 1] || [];
                    visited[level + 1].push(word);
                    changes++;
                    if (word === endWord) {
                        endLevel = level + 2;
                        done = true;
                    }
                    wordMatched = true;
                }
            }
            );
            if (!wordMatched) {
                remaining.push(word);
            }
        }
        );
        if (changes) {
            changes = 0;
            wordList = remaining;
            solve(level + 1);
        }

    }
    solve(0);
    console.log(visited);
    return endLevel;
};
