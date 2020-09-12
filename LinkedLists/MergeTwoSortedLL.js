//Merge two sorted linked lists

class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }
    add = (val) => {
        const newNode = new Node(val)
 
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
}
const listA = new LinkedList()
const listB = new LinkedList()

listA.add(1)
listA.add(3)
listA.add(5)
listA.add(12)
listB.add(2)
listB.add(7)
listB.add(11)
listB.add(21)

// console.log(listA.head)
// console.log(listB)

const sortLL = (a, b) => {
	if (!a || !b){
        return a || b
    }
    if(a.val < b.val){
        a.next = sortLL(a.next, b)
        return a
    }
    b.next = sortLL(a, b.next)
    return b
}

console.log(sortLL(listA,listB))
