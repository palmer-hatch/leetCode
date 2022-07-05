

let prices = [3,3,3,1]


console.log(prices.filter(x => x=== 5
    ))
let newPrice = prices.map(x => x *2)

console.log(newPrice)



console.log(prices.find(x => x===3 ))


console.log(prices.findIndex(x => x===3 ))

console.log(prices.fill(2, 2,2))

console.log(prices.every(x=> x===3))

console.log(prices.some(x=> x===1))
// var maxProfit = function(prices) {
   
//    let minprice= Number.MAX_VALUE
//    let newProfit = 0;
   
//     for(let i = 0; i<prices.length; i++){
//         if (prices[i] < minprice){
//             minprice = prices[i]
//         }
//         else if(prices[i] - minprice > newProfit){
//             newProfit = prices[i] - minprice
//         }
//     }
//     return newProfit  
// };
 
// console.log(maxProfit(prices))


// // NOTES: Set the Min price HIGH (number.MAX_Value) then if you run through an
// establish the lower number buy checking if price I is actually the lowest...
// if that fails the lowest test seek to se if it has a higher profit than the rest of the numbers
// {}