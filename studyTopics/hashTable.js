// const person = {}
// person['firstName'] = 'bob'
// person['lastName'] = 'bobby'
// console.log(person['lastName'])

function hashStringToInt(s,tableSize){
    let hash = 17;

    for(let i = 0; i<s.length; i++){
        hash = (13 * hash * s.charCodeAt(i)) % tableSize
    }

    'ben'.charCodeAt()

    return hash

}


console.log('ben'.charCodeAt(0))

class HashTable {

    table = new Array(3)
    numItems= 0;
    
    resize= () => {
        const newTable = new Array(this.table.length *2)
        this.table.forEach(item => {
            if(item){
                item.forEach(([key, value])=> {
                    const idx = hashStringToInt(key, newTable.length)
                    if(newTable[idx]){
                        newTable[idx].push[key,value]    
                    }else{
                        newTable[idx] = [[key,value]]
            
                    }
                    newTable[idx] = value
                })
            }
        })
        this.table = newTable
    }

    setItem= (key,value) => {
        this.numItems++
        let loadFactor = this.numItems/ this.table.length
        if(loadFactor>.8){
            console.log('resize happening')
            //resize
            this.resize()

        }


        const idx = hashStringToInt(key, this.table.length)
        if(this.table[idx]){
            this.table[idx].push[key,value]    
        }else{
            this.table[idx] = [[key,value]]

        }
    }

    

    getItem = (key) => {
        const idx = hashStringToInt(key, this.table.length)
        if(!this.table[idx]){
            return null
        }
        return this.table[idx].find(x => x[0] === key)[1]; 
    }
}

const myTable = new HashTable()
myTable.setItem("firstName","Palmer")
myTable.setItem("lastName", "Hatch")
myTable.setItem('age', 25)
// myTable.getItem("firstName")
// myTable.getItem("lastName")
console.log(myTable.table.length)
console.log(myTable.getItem("firstName"))
console.log(myTable.getItem("lastName"))
console.log(myTable.getItem("age"))

