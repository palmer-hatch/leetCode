 
 
 let nums = [1,2,3,4]
 
 let newSum= [nums[1]]
    for(let i = 0; i< nums.length; i++){
    for (let x = 0; x<newSum.length;x++ ){
     newSum = [...newSum, nums[i]+newSum[x]]
        
    }console.log(newSum) 
    }