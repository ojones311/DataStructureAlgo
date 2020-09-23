class CircularQueue {
    constructor(size){
        this.elements = []
        this.size = size
        this.length = 0
        this.front = 0
        this.back = -1
    }
    enqueue(element){
        if(this.length >= this.size){
            console.log('No more space')
        }
        this.back ++
        this.elements[this.back % this.size] = element
        this.length ++
    }
    dequeue(){
        if(this.isEmpty()){
            console.log('Queue is empty')
        }
        const val = this.getFront()
        this.elements[this.front % this.size] = null
        this.front ++
        this.length --
        return val
    }
    isEmpty(){
        return this.length == 0
    }
    getFront(){
        return this.elements[this.front % this.size]
    }
    isFull(){
        return this.length === this.size
    }
}

let circleWaitingRoom = new CircularQueue(4)

circleWaitingRoom.enqueue(2)
circleWaitingRoom.enqueue(4)
circleWaitingRoom.enqueue(9)
circleWaitingRoom.enqueue(11)

console.log(circleWaitingRoom)