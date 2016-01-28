var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //we need o refer to an actual object
  var stack = {
    storage: {},
    count: 0
    // push: stackMethods.push,
    // pop: stackMethods.pop,
    // size: stackMethods.size
  };
  _.extend(stack, stackMethods);
  return stack;
};


//don't forget commas!

 var stackMethods = {
  //count: 0,

  push: function(value) {
    this.storage[this.count] = value;
    this.count ++;
  },

  pop: function(){

    if(this.count) {
      this.count --;
    }

    return this.storage[this.count];
  },

  size: function(){
    return this.count;
  }

 };

/*
storage: {
  0: 'a',
  1: 'b',
  3: 'c'
}
*/