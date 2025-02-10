/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
function findTheDifference(s, t) {
    var charCodeDiff = 0;

    // Subtract character codes from s
    for (var i = 0; i < s.length; i++) {
        charCodeDiff -= s.charCodeAt(i);
    }

    // Add character codes from t
    for (var i = 0; i < t.length; i++) {
        charCodeDiff += t.charCodeAt(i);
    }

    return String.fromCharCode(charCodeDiff);
};