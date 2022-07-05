nums = [5,7,7,8,8,10] 
target = 6


var searchRange = function(nums, target) {
    arr = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === target){
            arr.push(i)
        }
    }return arr
    if(arr = []){
        arr = [-1,-1]
    }return arr
};

console.log(searchRange(nums,target))