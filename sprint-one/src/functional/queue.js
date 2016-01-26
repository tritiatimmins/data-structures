var Queue = function(){
  var count = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    //when an item is added the count changes
    storage[count] = value;
    count ++
  };

  someInstance.dequeue = function(){
    if(count) {
    count --
    }
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
