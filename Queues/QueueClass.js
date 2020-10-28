

class Queue {
    constructor(){
        this.elements = [];
    }

    enqueue(value){
        this.elements.push(value);
    }

    dequeue(){
        return this.arr.shift();
    }

    peek(){
        return this.elements[0];
    }

    isEmpty(){
        return this.elements.length === 0
    }

    size(){
        return this.elements.length
    }
}


let myQueue = new Queue()