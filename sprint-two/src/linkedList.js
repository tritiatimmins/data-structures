
var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
   

  list.addToTail = function(value){
   //make a new node to represent the new node instance
    var currentNode = Node(value);
    if(!list.head){
      list.head = currentNode;
    }
    if(list.tail){
      list.tail.next = currentNode;
    }
    list.tail = currentNode;
    if(list.head.next){
    list.head.next = currentNode;
  }
   };
 
  list.removeHead = function(){
    var decapitated = list.head;
    var currentNode = list.head;
    list.head = currentNode.next;
    currentNode = null
    return decapitated.value;
 
  };

  list.contains = function(target){
    //if target is a value in linked list, return true
    //otherwise return false
    //return the list itself
    //how are we identifying a value that was added?
/*if(list.hasOwnProperty(target)){
  return true
}
else{
return false;
}
*/


}

return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
