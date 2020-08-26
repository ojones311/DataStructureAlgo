//Detect cycle in a linked list 

//Need to check if the next node points to any of the previous nodes

const hasCycle = (head) => {
    let slowPointer = head
    let fastPointer = head

    while(fastPointer && fastPointer.next){
        slowPointer = slowPointer.next 
        fastPointer = fastPointer.next.next

        if(slowPointer === fastPointer){
            return true
        }
    }
    return false
}