var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
 var i = getIndexBelowMaxForKey(k, this._limit);
console.log("this is i", i);
};


HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  console.log("this is i in retrieve", i);

};

HashTable.prototype.remove = function(k){

};



/*
 * Complexity: What is the time complexity of the above functions?
[{},{},{},{}] or [[],[],[],[],[],[],[],[],[]]
 */