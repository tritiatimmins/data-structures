var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods.prototype);
  queue.storage = {};
  queue.count = 0;
  queue.firstInLine = 0;
  queue.lastInLine = 0;
  // _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){

 this.storage[this.lastInLine] = value;
 this.lastInLine++;
 this.count ++; 
};

queueMethods.dequeue = function() {
  
  var dequeued = this.storage[this.firstInLine];
  
  delete this.storage[this.firstInLine];
  
  this.firstInLine ++;
  
  if(this.count){
    this.count--;
  }
  
    return dequeued;
};

queueMethods.size = function(){
  return this.count;
};
