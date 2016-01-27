var Queue = function(){
  var count = 0;


  var highestIndex = 0;

  var lowestIndex = 0;

  
  var someInstance = {};

  //might need to add an index of 1?

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){

    //when an item is added the count changes a goes to the front of the list (FIFO)
    storage[lowestIndex] = value;
    lowestIndex ++;
    count ++;
  };

  someInstance.dequeue = function(){

    //when count is increased, or when something is added
    //we have to make sure that the first item in the object is the same thing that gets removed.
    //

    var dequeued = storage[highestIndex];

    delete storage[highestIndex];
    highestIndex++;

    if(count) {
    count --;
    }//create another condition for if something is removed?
    //if(count){
      //storage[0] = someInstance[0];
    //}
    //somehow we have to make the first value undefined
    //so that the undefined value will equal whatever we input

    return dequeued;
  };

  someInstance.size = function(){
    return count;
  };
 
  return someInstance;
};
