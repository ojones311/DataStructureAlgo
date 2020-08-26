//Check to see if a bracket is balanced

//Ex  '({{[]}})'is true but '{(])}' is false

//Loop through the string push str to stack Pop string off of stack and check to see if the original sting 
// and joined stacked are equal

const isBalanced = (str) => {
    let stack = []
    let splitStr = str.split('')
    for (char in splitStr){
        stack.push(char)
    }
    for (char in stack){
        stack.pop()
    }
}