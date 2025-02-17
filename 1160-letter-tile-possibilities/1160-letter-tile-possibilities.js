/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    let freqMap = new Map();

    for(let char of tiles ){
        freqMap.set(char,(freqMap.get(char)||0)+1)
    }

    function backtrack(){
        let count = 0;

        for(let [char,freq] of freqMap){
            if(freq>0){
                freqMap.set(char,freq-1);
                count += 1+backtrack();

                freqMap.set(char,freq);
            }
        }
        return count
    }

    return backtrack();

};