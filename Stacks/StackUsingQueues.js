//Implement a stack using queues

// const Stack = require('./StackClass')

// let myStack = Stack.myStack

// 3 => 4 => 5 => 6  6 => 5 => 4=> 3

[3,4,5,6] [6,5,4,3]

class Stack {
    constructor(){
        this.stackOne = []
        this.stackTwo = []
    }
    push(elem){
        this.stackOne.push(elem)
        this.stackTwo.push(this.stackOne.pop())
    }
    pop(){
        if(stackOne.isEmpty()){
            return stackTwo[0]
        }else {

        }
    }
    peek(){

    }
    isEmpty(){
        if (this.stackTwo === []){
            return true
        }else {
            return false
        }
    }
}

Stack.push()