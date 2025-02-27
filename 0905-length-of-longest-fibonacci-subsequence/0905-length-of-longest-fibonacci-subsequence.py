class Solution:
    def lenLongestFibSubseq(self, arr: List[int]) -> int:
        matrix = [[2]*len(arr) for _ in range(len(arr))]
        hm = {}
        bigmax = 0
        for i in range(len(arr)):
            hm[arr[i]] = i
            for j in range(i-1, -1, -1):
                if arr[i]>=arr[j]*2:
                    break
                if arr[i]-arr[j] in hm:
                    k = hm[arr[i]-arr[j]]
                    matrix[i][j] = max(2, matrix[j][k] + 1)
                    bigmax = max(bigmax, matrix[i][j])
        return bigmax
            