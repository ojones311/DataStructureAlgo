class LinkedListNode {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    add = (value) => {
       const newNode = new LinkedListNode(value)

       if(this.head === null){
           this.head = newNode
       }else{
           let current = this.head
           while (current.next){
               current = current.next
           }
           current.next = newNode
       }
    }
    print = () => {
        if(!this.head.next){
            console.log(this.head.value)
        }else {
            let current = this.head
            while(current){
                console.log(current.value)
                current = current.next
            }
        }
    }
}

const list = new LinkedList()

list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.add(5)

list.print()
