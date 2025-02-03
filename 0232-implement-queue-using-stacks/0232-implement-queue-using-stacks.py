class MyQueue:

    def __init__(self):
        self.d = deque()

    def push(self, x: int) -> None:
        self.d.append(x)
        #x = 2
        #[] > [2]
        #x = 1
        #[2] > [2, 1]

    def pop(self) -> int:
        # [2, 1]
        # 2, [1]
        return self.d.popleft()

    def peek(self) -> int:
        print(self.d)
        return self.d[0]
        

    def empty(self) -> bool:
        if not self.d:
            return True
        return False
        


# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()