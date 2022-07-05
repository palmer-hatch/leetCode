let nums = [2,7,8,1]
let target = 9
// let twoSum1 = function(nums, target) {
//     let final=[];
//     for(let i=0;i<nums.length;i++){
//         let j=i+1;
//         console.log(j,'j');
//         while(j<nums.length){
//             if(nums[i]+nums[j]===target){
//                 final.push(i);
//                 final.push(j);
//                 return final;
//             }
//             j++;
//         }
//     }
// };
var twoSum = function(nums, target) {
    let output = []
   for(let i = 0; i< nums.length; i++){
       for (let x = 1; x < nums.length; x++){
           if(nums[i] + nums[x] === target){
            output.push(i,x)
           }
       }
   }return output
          
};

console.log(twoSum(nums, target))
// nested for loops
// needed 3 = signs otherwise left side of equation wouldnt work
//output. push inside the if
//return output after mother forloop