class Solution:
    def integerBreak(self, n: int) -> int:
        
        if n == 2:
            return 1
        if n == 3:
            return 2

        three = 0
        two = 0
        
        if n%3 == 1:
            three = n//3 - 1
            n = n - three*3     
        elif n%3 == 2:
            three = n//3
            n = n - three*3
        else:
            three = n//3
            n = 0

        two = n//2

        return 3**three * 2**two