//Check to see if a bracket is balanced

//Ex  '({{[]}})'is true but '{(])}' is false
//import stack class
const Stack = require('./StackClass.js')

const isBalanced = (str) => {
    let myStack = new Stack.Stack()
    let checkerDict = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    for (let i = 0; i < str.length; i++){
        if(str[i] === '{' || str[i] === '[' || str[i] === '('){
            myStack.push(str[i])
        }else {
            let end = myStack.pop()
            if(str[i] !== checkerDict[end]){
                return false
            };
        }    
    }
    if (myStack.size() !== 0 ){
        return false
    }
    myStack.elements = []
    return true
}

console.log(isBalanced('{[([{[]}])]}'))
console.log(isBalanced('[][][({[(}]))]{]'))
