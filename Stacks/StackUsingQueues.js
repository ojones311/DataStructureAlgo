//Implement a stack using queues

// const Stack = require('./StackClass')

// let myStack = Stack.myStack

// 3 => 4 => 5 => 6  6 => 5 => 4=> 3

// [3,4,5,6] [6,5,4,3]

class Stack {
    constructor(){
        this.q1 = []
        this.q2 = []
    }
    push(elem){
        this.q1.push(elem)
    }
    pop(){
        while(this.q1.length > 1){
            this.q2.push(this.q1.shift())
        }
        let top = this.q1.shift()
        this.q1 = this.q2
        this.q2 = []
        return top
    }
    top(){
        let top = this.pop()
        this.q1.push(top)
        return top
    }
    isEmpty(){
        return this.q1.length === 0
    }
}

let myStack = new Stack()

myStack.push(2)
myStack.push(3)
myStack.push(4)
myStack.push(5)

// console.log(myStack.isEmpty())
console.log(myStack)