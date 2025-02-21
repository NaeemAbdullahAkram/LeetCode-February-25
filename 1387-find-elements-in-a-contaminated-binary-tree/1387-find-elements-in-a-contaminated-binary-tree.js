class FindElements {
    constructor(root) {
        this.values = new Set();
        this.recoverTree(root, 0);
    }

    recoverTree(node, value) {
        if (!node) return;
        node.val = value;
        this.values.add(value);
        this.recoverTree(node.left, 2 * value + 1);
        this.recoverTree(node.right, 2 * value + 2);
    }

    find(target) {
        return this.values.has(target);
    }
}