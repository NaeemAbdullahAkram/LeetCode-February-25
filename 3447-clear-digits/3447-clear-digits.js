/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let stack = []

    for(let char of s){
        if(isNaN(char)){
            stack.push(char)
        }else{
            stack.pop()
        }
    }
    return stack.join("")
};