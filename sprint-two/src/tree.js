var Tree = function(value){
  var newTree = {};

_.extend(newTree, treeMethods);
 
  newTree.value = value;

  // your code here
  newTree.children = null;  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  if(this.children === null){
    this.children = value;
  }
  //the tree structure 
  //this.children = value;
};

treeMethods.contains = function(target){

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
