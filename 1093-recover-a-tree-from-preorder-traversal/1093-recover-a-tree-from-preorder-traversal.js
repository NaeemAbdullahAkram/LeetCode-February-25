/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function (traversal) {
    let val = '';
    let i = 0;
    while (i < traversal.length && traversal[i] !== '-') {
        val += traversal[i];
        i++;
    }
    // i--;
    let head = new TreeNode(parseInt(val));
    let map = {};
    map['0'] = [];
    map['0'].push(head);

    let dashcount = 0;
    for (i; i < traversal.length; i++) {
        if (traversal[i] == "-") {
            dashcount++;
        } else {

            let val = '';
            while (i < traversal.length && traversal[i] !== '-') {
                val += traversal[i];
                i++;
            }

            map[dashcount] = map[dashcount] || [];
            let currNode = new TreeNode(parseInt(val));
            map[dashcount].push(currNode);
            let prevLevel = map[dashcount - 1];

            if (prevLevel && prevLevel.length > 0) {
                let parentNode = prevLevel[prevLevel.length - 1];

                if (!parentNode.left) {
                    parentNode.left = currNode;
                } else if (!parentNode.right) {
                    parentNode.right = currNode;
                }
            }
            dashcount = 0;
            i--;
        }
    }
    return head;
};