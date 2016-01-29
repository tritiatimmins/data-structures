var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 var stack = Object.create(Stack.prototype);
 stack.count = 0;
 stack.storage = {};

  return stack;
};

var stackMethods = {};

Stack.prototype.push = function (value){
this.storage[this.count] = value;
this.count ++;
};

Stack.prototype.pop = function (){
  console.log(this.count);
if(this.count){
  this.count --;
}
return this.storage[this.count];
};

Stack.prototype.size = function (){

return this.count;
};