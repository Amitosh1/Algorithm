/** https://leetcode.com/problems/word-ladder-ii
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
function Tree(val) {
    this.val = val;
    this.parent = [];
}

var findLadders = function(beginWord, endWord, wordList) {
    var visited = {}, touched = {}, endWord2;
    visited[0] = [new Tree(beginWord)];
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
                if (isSinglematched(elem.val, word)) {
                    visited[level + 1] = visited[level + 1] || [];
                    var word2 = touched[word] || new Tree(word);
                    word2.parent.filter(prnt=>prnt.val === elem.val).length === 0 && word2.parent.push(elem);
                    visited[level + 1].push(word2);
                    changes++;
                    touched[word] = word2;
                    if (word === endWord) {
                        endLevel = level + 2;
                        done = true;
                        endWord2 = word2;
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
    var results = [];
    function pattern(elem, prev) {
        var result = [];
        elem && elem.parent.forEach(parent=>{
            var prev2 = prev.slice(0);
            prev2.push(parent.val);
            pattern(parent, prev2);
        }
        );
        if (elem && !elem.parent.length) {
            results.push(prev.reverse());
        }
    }
    //console.log(endWord2);

    endWord2 && pattern(endWord2, [endWord2.val]);
    return results;
};
