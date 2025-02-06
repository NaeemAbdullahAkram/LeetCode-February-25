# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    first_element_to_swap: TreeNode | None = None
    second_element_to_swap: TreeNode | None = None
    prev_element = TreeNode(-inf)

    def walk_subtree(self, root: TreeNode | None):
        if not root:
            return

        self.walk_subtree(root.left)

        if (
            self.first_element_to_swap is None
            and self.prev_element.val >= root.val
        ):
            self.first_element_to_swap = self.prev_element

        if (
            self.first_element_to_swap is not None
            and self.prev_element.val >= root.val
        ):
            self.second_element_to_swap = root
        
        self.prev_element = root

        self.walk_subtree(root.right)


    def recoverTree(self, root: TreeNode | None) -> None:
        """
        Do not return anything, modify root in-place instead.
        """

        self.walk_subtree(root)

        if self.first_element_to_swap is None or self.second_element_to_swap is None:
            raise Exception
        self.first_element_to_swap.val, self.second_element_to_swap.val = (
            self.second_element_to_swap.val,
            self.first_element_to_swap.val,
        )

        