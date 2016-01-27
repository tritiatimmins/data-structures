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
  push: function(value) {
    this.count = value;
    this.count ++;
  },

  pop: function(){
    if(this.count) {
      this.count --;
    }
    return this.count;
  },

  size: function(){
    return this.count;
  }

 };

