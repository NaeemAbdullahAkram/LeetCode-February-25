var minOperations = function (nums, k) {

    const minHeap = new MinPriorityQueue();
    for (let num of nums) {
        minHeap.enqueue(num);
    }

    let count = 0;
    while (minHeap.size() >= 2 && minHeap.front().element < k) {

        const smallest = minHeap.dequeue().element;
        const secondSmallest = minHeap.dequeue().element;
        const operation = (2 * smallest) + secondSmallest;
        minHeap.enqueue(operation);
        count++;
    }
    return count;
};