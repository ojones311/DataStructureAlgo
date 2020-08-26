//Implement the following operations of a queue using stacks.

//push(x) -- Push element x to the back of queue.
//pop() -- Removes the element from in front of queue.
//peek() -- Get the front element.
//empty() -- Return whether the queue is empty.

var MyQueue = function() {
    this.stackOne = []
 };
 
 
 MyQueue.prototype.push = function(x) {
     this.stackOne.push(x)
 };
 

 MyQueue.prototype.pop = function() {
     return this.stackOne.shift()
 };
 

 MyQueue.prototype.peek = function() {
     return this.stackOne[0]
 };
 
 
 MyQueue.prototype.empty = function() {
     if (this.stackOne.length === 0){
         return true
     }else{
         return false
     }
     
 };