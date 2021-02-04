// Given a singly linked list with head node head, return a middle node of linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// Input: 1 -> 2 -> 3 -> 4 -> 5 -> nil
// Output: 3

// If two middle nodes, provide the second.
// Input: 1 -> 2 -> 3 -> 4 -> 5 -> nil
// Output: 4

//Go through linked list 
//Keep track of number of nodes until we get til the end
//Then return the value of the node at the middle node 

const traverseNodes = (head) => {
 let currentNode = head
 let count = 0
 while (currentNode){
   count++
   currentNode = currentNode.next
 }
 return count
}

const getPositionOfMiddleNode = (list) => {
 let count = traverseNodes(list)

 if (count === 0){
   return false
 }else{
   return Math.floor(count / 2)
 }
}

const getValueOfMiddleNode = (head) => {
 let headNode = head
 let position = getPositionOfMiddleNode(headNode)
 for (let i = 0; i < position; i ++){
   headNode = headNode.next
 }
 return headNode.value
}