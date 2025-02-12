/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
    const digitSumMap = new Map();
    let maxPairSum = -1;

    function getDigitSum(num) {
        return num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
    }

    for (let num of nums) {
        let sumDigits = getDigitSum(num);

        if (digitSumMap.has(sumDigits)) {
            maxPairSum = Math.max(maxPairSum, num + digitSumMap.get(sumDigits));
            digitSumMap.set(sumDigits, Math.max(digitSumMap.get(sumDigits), num));
        } else {
            digitSumMap.set(sumDigits, num);
        }
    }

    return maxPairSum;
};