/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
   while (s.includes(part)) {  // Keep removing `part` while it exists in `s`
        s = s.replace(part, ""); // Remove only the first occurrence
    }
    return s;
};