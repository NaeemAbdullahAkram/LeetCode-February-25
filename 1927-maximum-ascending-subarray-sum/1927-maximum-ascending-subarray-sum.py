class Solution:
    def maxAscendingSum(self, nums: List[int]) -> int:
        maxVal = nums[0]
        curr = nums[0]
        for i in range(1, len(nums)):
            if nums[i] > nums[i-1]:
                curr += nums[i]
            else:
                maxVal = max(maxVal, curr)
                curr = nums[i]
        maxVal = max(maxVal, curr)
        return maxVal