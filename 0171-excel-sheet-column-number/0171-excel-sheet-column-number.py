class Solution:
    def titleToNumber(self, s: str) -> int:
        n = len(s)
        cnt = [0] * 7
        p = 0
        for i in range(n -1, -1, -1):
            cnt[i] = (ord(s[i]) - ord('A') + 1) * 26 ** p
            p += 1
        return sum(cnt)