// 6/24/2022
let digits = [9,9]

var plusOne = function(digits) {
    let endIndex = digits.length - 1
    digits[endIndex]++;
    while (digits[endIndex] > 9) {
        let tmp = digits[endIndex];
        digits[endIndex] = digits[endIndex] - 10;
        if (endIndex-1 < 0) {
            digits.unshift(1);
        } else {
            digits[endIndex-1]++;
            endIndex--;
        } 
    }
    return digits;
};



var plusOne = function(digits) {
    for(let i = 0; i<digits.length; i++){
        if(i>= digits.length -1 && digits[i]===9 && digits.length > 1){
        digits[i] =0
        digits[i-1] += 1
        }
        else if(i>= digits.length - 1 && digits[i]===9 ){
            digits[i] =1
            digits = [...digits,0]
            return digits
        }
        else if(digits[i]===9  ){
            digits[i] += 1
        }
        else if(i>= digits.length -1  ){
            digits[i] =1
            digits = [...digits,0]
            return digits
        }
    }return digits

};
console.log(plusOne(digits))