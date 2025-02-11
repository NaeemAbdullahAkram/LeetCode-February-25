/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
    nums.sort((a, b) => a - b)
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        let diff = 0
        if (nums[i + 1]) {
            diff = nums[i + 1] - nums[i]
        }
        max = max > diff ? max : diff
    }
    return (max)
};