/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    const resArr = [];
    const choices = ['a', 'b', 'c'];
    const backtrack = (str) => {
        if (str.length === n) {
            resArr.push(str);
            return resArr.length === k;
        }

        if (resArr.length === k) 
            return true;

        for (let i = 0; i < 3; i ++) {
            const c = choices[i];
            if (str && str[str.length - 1] === c) continue;
            if (backtrack(`${str}${c}`))
                break;
        }

        return resArr.length === k;
    }
    backtrack("");

    return resArr[k - 1] || "";
};