/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let hash = {};
    inorder.forEach((e, i)=>{hash[e] = i});
    
    let recur = function(start, end) {
        if (start > end) return null;
        let root = new TreeNode(preorder.shift());
        root.left = recur(start, hash[root.val] - 1);
        root.right = recur(hash[root.val] + 1, end);
        return root;
    }
    
    return recur(0, inorder.length - 1);    
};