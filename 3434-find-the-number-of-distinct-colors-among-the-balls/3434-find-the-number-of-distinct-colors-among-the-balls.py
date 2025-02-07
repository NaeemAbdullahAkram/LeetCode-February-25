from collections import defaultdict
class Solution:
    def queryResults(self, limit: int, queries: List[List[int]]) -> List[int]:
        result = []
        curr = 0
        distinct_colors = set()
        colors = defaultdict(int)
        balls = {}

        for x, y in queries:
            if x in balls:
                prev_color = balls[x]
                if prev_color in distinct_colors:
                    colors[prev_color] -= 1
                    if colors[prev_color] == 0:
                        distinct_colors.remove(prev_color)
                        curr -= 1

                balls[x] = y

            else:
                balls[x] = y
            
            if colors[y] == 0:
                distinct_colors.add(y)
                curr += 1
            colors[y] += 1

            result.append(curr)

        return result