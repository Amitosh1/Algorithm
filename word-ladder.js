/** https://leetcode.com/problems/word-ladder/
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

var ladderLength = function(beginWord, endWord, wordList) {
    var visited = {}
      , touched = [];

    visited[0] = [beginWord];
    touched.push(beginWord);
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
        !done && wordList.forEach(word=>{
            touched.indexOf(word) === -1 && visited[level].forEach(elem=>{
                if (isSinglematched(elem, word)) {
                    visited[level + 1] = visited[level + 1] || [];
                    visited[level + 1].push(word);
                    changes++;
                    touched.push(word);
                    if (word === endWord) {
                        endLevel = level + 2;
                        done = true;
                    }
                }
            }
            );
        }
        );
        if (changes) {
            changes = 0;
            solve(level + 1);
        }

    }
    solve(0);
    return endLevel;
};
