//Merge two sorted linked lists

class Node {
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
        const newNode = new Node(value)
 
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

//Need to fix function it runs on an infinite loop
const sortLL = (a, b) => {
	let solutionList = []
    let currNodeA = a
    let currNodeB = b
    let dummyNode = {}

    while(currNodeA.next || currNodeB.next){
	    if((currNodeA.value >= currNodeB.value) && currNodeA.next){
	        solutionList.push(currNodeA)
	        currNodeA = currNodeA.next
        }else if((currNodeA.value < currNodeB.value) && currNodeB.next){
            solutionList.push(currNodeB)
            currNodeB = currNodeB.next
        }
    }
    console.log(solutionList)
    return solutionList
}

sortLL(listA,listB)
