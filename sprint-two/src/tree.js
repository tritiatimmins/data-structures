var Tree = function(value){
  var newTree = {};

_.extend(newTree, treeMethods);
 
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me


  return newTree;
};

// newTree.children = null;

var treeMethods = {};

treeMethods.addChild = function(value){
//We have value; need object
//We have an array for tree

//create a tree because each new node is its own tree
//add that tree to its own array

//even if it's still an array it;s still a tree

value = 

  this.children.push(value); 
};

treeMethods.contains = function(target){

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
