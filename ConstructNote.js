//https://pplearn.udemy.com/js-algorithms-and-data-structures-masterclass/learn/v4/t/quiz/4410600

function constructNote(str, letters) {
    var length = letters.length;
    var letters_comb = {};
    var result = true;
    if (str.length > letters.length)
        return false;
    for (var i = 0; i < length; i++) {
        if (!letters_comb[letters[i]])
            letters_comb[letters[i]] = 1;
        else
            letters_comb[letters[i]] += 1;
    }

    for (var j = 0; j < str.length; j++) {
        if (letters_comb[str[j]] === 0) {
            result = false;
            break;
        } else {
            letters_comb[str[j]] -= 1;
        }
    }
    return result;
}
