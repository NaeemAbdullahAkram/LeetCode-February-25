class Solution:
    def getHint(self, s: str, g: str) -> str:
        x = y = 0
        d = defaultdict(int)
        t = defaultdict(int)
        n = len(s)

        for i in range(n):
            if s[i] == g[i]:
                x += 1
            else:
                d[s[i]] += 1
                t[g[i]] += 1

        for c in d:
            if d[c] > 0:
                if c in t:
                    if t[c] > 0:
                        te = min(t[c], d[c])

                        y += te
                        d[c] -= te
                        t[c] -= te

        return f'{x}A{y}B'