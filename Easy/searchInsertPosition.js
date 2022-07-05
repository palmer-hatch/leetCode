
let nums = [1,3,5,6] 
let target = 7

var searchInsert = function(nums, target) {
for (let i = 0; i < nums.length; i++){
    if (nums[i] >= target){
        return i;
    }
}
return nums.length;
}

console.log(searchInsert(nums))
// var searchInsert = function(nums, target) {
// let nums = [1,3,5,6] 
// let target = 7

// var searchInsert = function(nums, target) {
//     let location = -1
//     let spot = 0
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] === target){
//             return i
//         }
//         else if(i < target && nums[i] === nums.length){
            
//             location = nums.length + 1
//         }
//         else if(i < target && nums[i]  ){
//             location = location +1
//         }
        
//     }return location

// };

// console.log(searchInsert(nums,target))

