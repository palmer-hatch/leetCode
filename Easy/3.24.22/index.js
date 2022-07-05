 function numRescueBoats (people, limit){
    let perBoatCounter = 0
    let boatCounter = 0 
   
    for( let i = 0; i < people.length; i++){
        if((people[i] + perBoatCounter)< limit){
            perBoatCounter = perBoatCounter + people[i]
        }else{
            boatCounter = boatCounter + 1
    
    }return boatCounter
}
 }
console.log(numRescueBoats([2,1,3,1,2], 3))