/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    k = k % nums.length; 
    // Slice and concatenate
    nums.unshift(...nums.splice(nums.length - k));
};