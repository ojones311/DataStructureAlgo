//Check to see if a bracket is balanced

//Ex  '({{[]}})'is true but '{(])}' is false

//Loop through the string push str to stack Pop string off of stack and check to see if the original sting 
// and joined stacked are equal

const isBalanced = (str) => {
    let stack = []
    let reverseStr = ''
    let splitStr = str.split('')
    for (let i = 0; i < splitStr.length; i ++){
        stack.push(splitStr[i])
    }
    console.log(stack)
    for (let i = 0; i < stack.length; i++){
       reverseStr += stack.pop()
    }
    console.log(reverseStr)
    // if (reverseStr === str){
    //     return true
    // }
    // console.log(stack, reverseStr, str)
    // return false
}

console.log(isBalanced('({{[]}})'))