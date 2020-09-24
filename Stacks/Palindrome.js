//Check if a string is a palindrome using a stack 
//import stack class
const Stack = require('./StackClass.js')


// const checkPalindrome = (str) => {
//     let stack = []; 
//     let rword = ""; 
//     for(let i = 0; i < str.length; i++){
//         stack.push(str[i]);
//     }
//     for(let i = 0; i < str.length; i++){
//         rword += stack.pop();
//     }
//     if (rword === str){
//         return true 
//     }
//     return false
// }

// Implementing a stack class
const checkPalindrome = (str) => {
    let myStack = new Stack()
    for (let i = 0; i < str.length; i++){
        myStack.push(str[i])    
    }
    console.log(myStack)

    for (let i = 0 ; i < str.length/2; i++){
        let currentLetter = myStack.pop()
        if(currentLetter !== str[i]){
           return false
       } 
    }
    return true
}
console.log(checkPalindrome('racecar'))
console.log(checkPalindrome('hello'))
console.log(checkPalindrome('civic'))

