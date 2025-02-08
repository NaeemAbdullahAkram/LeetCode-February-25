var zigzagLevelOrder = function(root) {
    if (!root) return [];
    let stackQueue = [root];
    let result = [];
    let level = 1;
    
    while (stackQueue.length > 0) {
        const isLtoR = level % 2 === 1;
        const subLength = stackQueue.length;
        const subList = [];
        for (let i = 0; i < subLength; i++) {
            let node= stackQueue.shift();
            if (isLtoR) {
                subList.push(node.val);
            } else {
                 subList.unshift(node.val);
            }
            if (node.left) stackQueue.push(node.left);
            if (node.right) stackQueue.push(node.right);
        }
        level++;
        result.push(subList);
    }
    return result;
};