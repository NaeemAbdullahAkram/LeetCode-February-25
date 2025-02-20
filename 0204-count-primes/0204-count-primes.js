/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let initPrimes = [];
  for (let i = 2; i < n; i++) {
    let isPrime = true;
    for (let j = 2; j <= i/2; j++) {
        if(i % j == 0){
          isPrime = false;
          break;
        }       
    }
    if (isPrime) {
      initPrimes.push(i)
    }
    if (i**2 > n && isPrime) {
      break;
    }
  }
  let numberPrimes = initPrimes.length;
  for (let j = initPrimes[initPrimes.length - 1] + 1; j < n; j++) {
    let isPrime = true;
    for (let z = 0; z < initPrimes.length; z++) {
      if (j % initPrimes[z] == 0) {
        isPrime = false;
        break;
      }
    }
    if(isPrime) {
      numberPrimes += 1;
    }
  }
  return numberPrimes;
};