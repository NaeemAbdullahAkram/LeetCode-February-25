/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  const stack = [[-Infinity, Infinity, root]];
  
  while (stack.length) {
    const [ min, max, node ] = stack.pop();
    if (!node) continue;
    
    if (node.val <= min || node.val >= max) return false;
      
    stack.push(
      [node.val, max, node.right],
      [min, node.val, node.left],
    );
  }
  
  return true;
};