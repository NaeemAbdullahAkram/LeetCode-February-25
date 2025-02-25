const lengthOfLIS = function lengthOfLIS(nums) {
  const lowerBound = (a, target) => {
    let lo = 0
    let hi = a.length - 1
    while (lo <= hi) {
      const mid = lo + Math.trunc((hi - lo) / 2)
      if (a[mid] === target) {
        return mid
      } else if (a[mid] < target) {
        lo = mid + 1
      } else {
        hi = mid - 1
      }
    }
    return lo
  }
  const memo = [nums[0]]
  for (let i = 1; i < nums.length; i += 1) {
    const eqOrGrIndex = lowerBound(memo, nums[i])
    memo[eqOrGrIndex] = nums[i]
  }
  return memo.length
}