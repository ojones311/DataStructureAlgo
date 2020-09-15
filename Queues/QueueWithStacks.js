//Queue with two stacks

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