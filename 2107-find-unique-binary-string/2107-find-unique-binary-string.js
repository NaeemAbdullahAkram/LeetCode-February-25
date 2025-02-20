/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    n=nums.length
    const set = new Set(nums)
    for (let i = 0; i < (1 << n); i++) { // Iterate through all possible binary strings of length n
        let bin = i.toString(2);
        bin = bin.padStart(n, '0'); // Pad with leading zeros

        if (!set.has(bin)) {
            return bin;
        }
    }

};