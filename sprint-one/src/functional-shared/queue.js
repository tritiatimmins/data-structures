var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var queue = {
  storage: {},
  count: 0,
  firstInLine: 0,
  lastInLine: 0
};
  _.extend(queue, queueMethods);

  return queue;
};

var queueMethods = {
  //enqueue
  enqueue: function(value) {
   console.log("this.storage[this.firstInLine", this.storage[this.firstInLine]);
   this.storage[this.lastInLine] = value;
   this.lastInLine ++;  
   
   this.count ++;

  },

  //dequeue
  dequeue: function() {
  //create a new variable called dequeue
  var dequeued = this.storage[this.firstInLine];
  
  delete this.storage[this.firstInLine];

  this.firstInLine++;
  
  if(this.count){
    this.count--;
  }
  
  //we have to return dequeued
  return dequeued;

  },
  //size
  size: function() {
    return this.count;
  }
};