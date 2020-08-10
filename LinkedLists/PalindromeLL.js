//Given a singly linked list, determine if it is a palindrome.

//  Definition for singly-linked list.
//   function ListNode(val) {
//       this.val = val;
//       this.next = null;
//   }
//   @param {ListNode} head
//   @return {boolean}
 

isPalindrome = (head) => {
    let curr = head 
    let arr = []
    if (curr == null){
        return true
    }
    while(curr){
        arr.push(curr.value)
        curr = curr.next
    }
    console.log(arr)

    let curr2 = this.head 
    while (curr2){
        if(curr2.value !== arr.pop()){
            return false
        }
        curr2 = curr2.next
    }
    return true
}

console.log(list.isPalindrome())



