var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
   

  list.addToTail = function(value){
    //create new node
    //var newNode = Node(value);
    list.head = Node(value);  
      //change the next property of the current tail to the new node
      list.tail = Node(value);
      //create a variable for the current tail
      //var currentTail = Node(value);

      //set the current tail equal to the new node
      //currentTail.next = newNode;
      
   };
 
  list.removeHead = function(){
    
    list.tail.next = 0;
    console.log(list.tail.next);
 
  };

  list.contains = function(target){
 
  
  };

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
