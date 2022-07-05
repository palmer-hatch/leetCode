let nums = [1,2,3,1]


var containsDuplicate = function(nums) {
        const set = new Set();
      for(let i = 0; i<nums.length; i++){
        if(set.has(nums[i]))return true
        else set.add(nums[i])
        console.log(set)
      }
    };
    
        


console.log(containsDuplicate(nums))

//SETS! get them, study them, understand, make them your 
//greatest tool


//this solution below works, just brute force

// let numero = false
//     for(let i = 0; i<nums.length; i++){
//         console.log(nums[i])
//             for(let j=i+1; j<nums.length; j++){
//                 // console.log(nums[j])
               
//                 if(nums[i]=== nums[j]){
//                     numero = true
                    
//                 }
//                 }
               
//             }return numero

 // for(let i = 0; i<nums.length; i++){
    //     for(let j=1; j<nums.length; j++){
    //         if(nums[i]=== nums[j]){
    //             console.log(nums[i])
    //             return true
    //         }else{
    //             return false
    //         }
    //     }
    // }