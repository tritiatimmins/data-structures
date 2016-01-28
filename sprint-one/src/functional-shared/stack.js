var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //we need this to refer to an actual object
  var stack = {
    storage: {},
    count: 0
  };
  return _.extend(stack, stackMethods);
};


//don't forget commas!

 var stackMethods = {
  //count: 0,

  push: function(value) {
    this.storage[this.count] = value;
    console.log("LOOK HERE", this.count);
    this.count ++;
  },

  pop: function(){
    //console.log("this.count==>", this.count);
    //delete this.storage[this.count];

    if(this.count) {
      this.count --;
    }
    return this.storage;
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