

class Queue {
    constructor(){
        this.elements = [];
    }

    enqueue(value){
        this.elements.push(value);
    }

    dequeue(){
        return this.elements.shift();
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

    print(){
        this.elements.map((elem) => console.log('elem:',elem))
    }
}


let myQueue = new Queue()

myQueue.enqueue('Owen')
myQueue.enqueue('Alejo')
myQueue.enqueue('Johanne')
myQueue.enqueue('John')
myQueue.enqueue('Nilber')

console.log(myQueue)

const printQueue = (q) => {
    let temp = new Queue
    let str = ''
    while(q.size()){
     let elem = q.dequeue()
     str += '<-' + elem 
     temp.enqueue(elem)
   }
   while(!temp.isEmpty()){
       q.enqueue(temp.dequeue())
   }
   return str
}

console.log(printQueue(myQueue))

myQueue.enqueue('Mom')

console.log(printQueue(myQueue))