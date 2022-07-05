let nums = [1,1,2]
let removeDuplicates = function(nums) {
    
    for(let i = 0 ;i < nums.length;){
      let j = (i + 1)
      if(nums [i]=== nums[j]){
        nums.splice(j,1)
      }
      else{
        i++
      }
    }
    return nums.length;
};


// Using else to move the problem along-- also including nums.length in the return