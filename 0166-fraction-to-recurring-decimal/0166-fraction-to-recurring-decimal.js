/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if (numerator === 0) return "0";
    
    let result = "";
    if ((numerator < 0) ^ (denominator < 0)) {
        result += "-";
    }
    
    let num = Math.abs(numerator);
    let den = Math.abs(denominator);
    
    result += Math.floor(num / den);
    let remainder = num % den;
    
    if (remainder === 0) return result;
    
    result += ".";
    
    let map = {};
    while (remainder !== 0) {
        if (map[remainder] !== undefined) {
            result = result.substring(0, map[remainder]) + "(" + result.substring(map[remainder]) + ")";
            break;
        }
        
        map[remainder] = result.length;
        remainder *= 10;
        result += Math.floor(remainder / den);
        remainder %= den;
    }
    
    return result;
};