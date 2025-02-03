class Solution:
    def longestMonotonicSubarray(self, nums: List[int]) -> int:
        dCount = iCount = 1 
        maxLength = 1
        for i in range(1, len(nums)):
            if nums[i-1] > nums[i]:
                dCount += 1
                iCount = 1
            elif nums[i-1] < nums[i]:
                dCount = 1
                iCount += 1
            else:
                iCount = 1
                dCount = 1
            maxLength = max(maxLength, dCount, iCount)
        return maxLength