/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
    let reverse = false
    let ops = []
    while(n > 1) {
        if(n % 2 === 0 && reverse){
            ops.push(-1)
        } else {
            ops.push(0)
        }
        n = Math.floor(n/2)
        reverse = !reverse
    }
    result = 1
    while(ops.length > 0){
        let op = ops.pop()
        result = (2*result) + op
    }
    return result
};