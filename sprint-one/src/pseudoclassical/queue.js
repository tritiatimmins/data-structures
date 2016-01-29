var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.count = 0;
  this.firstInLine = 0;
  this.lastInLine = 0;
};

//add
Queue.prototype.enqueue = function(value) {
  this.storage[this.lastInLine] = value;
  this.count++;
  this.firstInLine++;
  this.lastInLine++;
};
//remove
Queue.prototype.dequeue = function(){
  // console.log("LOOK @ ME", this.firstInLine);
  
  if(this.count){
    this.count--;
  }
  
  delete this.firstInLine;
  return this.storage[this.count];
};
//size
Queue.prototype.size = function(){
  return this.count;
};
