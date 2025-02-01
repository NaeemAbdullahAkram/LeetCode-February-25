class Solution:
    def isArraySpecial(self, nums: List[int]) -> bool:
        if len(nums) == 1:
            return True
        for i in range(len(nums) - 1):
            flag = 0
            if nums[i] % 2 == 0 and nums[ i + 1] % 2 == 1:
                flag = 1
            if nums[i] % 2 == 1 and nums[i + 1] % 2 == 0 :
                flag = 1  

            if flag == 1:
                continue
            else:
                return False
        return True      