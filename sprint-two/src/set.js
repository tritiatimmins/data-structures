var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if(this._storage === undefined){
    this._storage = item;
  }
};

setPrototype.contains = function(item){
  if(this._storage){
    return true;
  } 
  else{
    return false;
  }
};

setPrototype.remove = function(item){
if(this._storage){
  this._storage = undefined;
}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
