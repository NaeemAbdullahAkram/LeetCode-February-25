class Solution:
    def areAlmostEqual(self, s1: str, s2: str) -> bool:
        if len(s1) != len(s2):
            return False
        
        if s1 == s2:
            return True
        
        i, n = 0, len(s1)
        while s1[i] == s2[i]:
            i += 1
        
        j = i + 1
        while j < n and s1[j] == s2[j]:
            j += 1
        
        k = j + 1
        while k < n and s1[k] == s2[k]:
            k += 1
        
        return k == n and s1[i] == s2[j] and s1[j] == s2[i]