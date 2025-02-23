
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let constructFromPrePost = function(preorder, postorder) {
    const pos = new Map(), n = postorder.length;
    for (let i = 0; i < n; ++i) pos.set(postorder[i], i);
    return dfs(0, n - 1, 0, n - 1, preorder, pos);
}

function dfs (preStart, preEnd, postStart, postEnd, preorder, pos) {
    const root = new TreeNode(preorder[preStart]);
    if (preStart > preEnd) return null; else if (preStart === preEnd) return root;
    root.left = dfs(preStart + 1, preStart + pos.get(preorder[preStart + 1]) - postStart + 1, postStart, pos.get(preorder[preStart + 1]), preorder, pos);
    root.right = dfs(preStart + pos.get(preorder[preStart + 1]) - postStart + 2, preEnd, pos.get(preorder[preStart + 1]) + 1, postEnd - 1, preorder, pos);
    return root;
}