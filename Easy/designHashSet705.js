var MyHashSet = function(){
    this.set = {}
};


MyHashSet.prototype.add= function(key){
this.set[key] = true
};

MyHashSet.prototype.remove = function(key){
    delete this.set[key]
};

MyHashSet.prototype.contains = function(key){
    return this.set[key] ? true : false
};