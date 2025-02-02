/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let check = 0;
   for(let i=1;i<nums.length;i++){
        if(nums[i]<nums[i-1]){
            check++;
        }
   } 
   if(nums[0]<nums[nums.length-1]){
    check++;
   }
   console.log(check)
   if(check<=1){return true;}
   return false;
};