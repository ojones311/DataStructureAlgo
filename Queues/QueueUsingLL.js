class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(){
        this.front = null
        this.back = null
    }

    enqueue(value){
        let node = new Node(value,null)
        if(this.front === null){
            this.front = node
            this.back = node
        }else {
            this.back.next = node
            this.back = this.back.next
        }
    }

    dequeue(){
        if(this.front !== null){
            let first = this.front
            this.front = this.front.next
            return first.value
        }
    }

    peek(){
        return this.front
    }

    rear(){
        return this.back
    }

    // size(){
    //     let counter = 0
    //     while(this.front){
    //         counter ++
    //         this.front = t
    //         his.front.next
    //     }
    //     return counter
    // }
    isEmpty(){
        if(!this.front && !this.back){
            return true
        }else{
            return false
        }
    }
}

let foodLine = new Queue()

foodLine.enqueue('eggs')
foodLine.enqueue('peaches')
foodLine.enqueue('soda')
foodLine.enqueue('waffles')

foodLine.dequeue()
