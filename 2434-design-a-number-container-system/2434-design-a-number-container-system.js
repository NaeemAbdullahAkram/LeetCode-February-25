
var NumberContainers = function() {

    this.indexes = new Map();
    this.numberIndexes  = new Map();
    
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {
    this.indexes.set(index, number);
    this.getQueue(number).enqueue(index);
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {

    const queue = this.getQueue(number);

    while(queue.size() && this.indexes.get(queue.front()) !== number) {
        queue.dequeue();
    }
    
    return queue.size() ? queue.front() : -1;
};

NumberContainers.prototype.getQueue = function(number) {
    
    if(!this.numberIndexes.has(number)) {
        const queue = new PriorityQueue({compare : (a, b) => a - b});
        this.numberIndexes.set(number, queue);
    }
    return this.numberIndexes.get(number);
};

/** 
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */