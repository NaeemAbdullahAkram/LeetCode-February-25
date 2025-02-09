/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {
    const n = nums.length;
    const goodMap = new Map();
    const totalPairs = (n * (n - 1) / 2);
    let goodPairs = 0;
    
    for (let i = 0; i < n; i++) {
        const diff = (nums[i] - i);
        if (!goodMap.has(diff)) { goodMap.set(diff, 0); }
        goodPairs += goodMap.get(diff);
        goodMap.set(diff, (goodMap.get(diff)) + 1);
    }
    return totalPairs - goodPairs;    
};