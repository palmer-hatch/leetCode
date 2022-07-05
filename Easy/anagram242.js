
let s = "rat"
let t = "tarp"


var isAnagram = function(s, t) {
    s = s.split('')
    t = t.split('')
    s.sort()
    t.sort()
    
   console.log(s)
   console.log(t)
   
   if(t = s)return true
   
   
   
    // const set = new Set(s)
    // for(let i = 0;i<t.length; i++){
    //     if (set.has(nums[i]){return true}

    // }
   
    


};

console.log(isAnagram(s,t))