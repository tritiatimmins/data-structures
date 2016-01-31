var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.count = 0;
  this.firstInLine = 0;
  this.lastInLine = 0;
};

Queue.prototype.enqueue = function(value) {
  
  this.storage[this.lastInLine] = value;
  
  this.lastInLine++;
  //the count increments
  this.count++
  //do not increment the first in line because people dont enter a line at the front
};
Queue.prototype.dequeue = function(){
  //you get your sandwich, you leave the line
  //remove the first in line of storage
  var dequeued = this.storage[this.firstInLine];
  //delete the value of dequeued
  // delete this.storage[this.firstInLine];
  
  delete dequeued;
  //incriment this only
  this.firstInLine++;

  if(this.count){
    this.count--;
  }
  //returns zero
  return dequeued;
};

Queue.prototype.size = function() {
  //ALWAYS return this count
  return this.count;
};