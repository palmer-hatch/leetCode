let nums1 = [1,2,3,0,0,0]
let m = 3
let nums2 = [2,5,6]
let n = 3


var merge = function(nums1, m, nums2, n) {
     nums1 =[...nums1.filter((e,i)=> i<= m-1 ),...nums2.filter((e,i)=> i<= n-1 )]
    nums1.sort()

};

console.log(merge(nums1,m,nums2,n))