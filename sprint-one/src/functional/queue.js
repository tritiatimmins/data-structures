var Queue = function(){
  var count = 0;
  //add lowest index for index 1
  var lowestIndex = 0;
  //add highestIndex for thing 2
  var highestIndex = 0;
  
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    //when an item is added the count changes
    //storage[count] = value;
    storage[highestIndex] = value;
    highestIndex++;
    count ++;
  };

  someInstance.dequeue = function(){
  //saving the first index of storage
   var dequeued = storage[lowestIndex];
   
   delete storage[lowestIndex];
   lowestIndex++;
    
    if(count) {
    count --
    }
    //return dequeued
    return dequeued;
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
