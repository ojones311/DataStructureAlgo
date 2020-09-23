//Queue with two stacks

const { Stack } = require("../Stacks/StackClass");

class Queue {
    constructor(){
       this.stackOne = new Stack()
       this.stackTwo = new Stack()
    }

    enqueue(elem){
        this.stackOne.push(elem)
    }

    dequeue(){
        while(this.stackOne.size() !== 0){
            this.stackTwo.push(this.stackOne.pop())
        }
        let pop = this.stackTwo.pop()

        while(this.stackTwo.size() !== 0){
            this.stackOne.push(this.stackTwo.pop())
        }
        return pop
    }
    peek(){
        return this.stackOne.elements[0]
    }
    size(){
        return this.stackOne.elements.length === 0
    }
}

let myQueue = new Queue()

myQueue.enqueue(1)
myQueue.enqueue(11)
myQueue.enqueue(111)
myQueue.enqueue(1111)

myQueue.dequeue()
myQueue.dequeue()

myQueue.enqueue(222)
console.log(myQueue.peek())
console.log(myQueue)