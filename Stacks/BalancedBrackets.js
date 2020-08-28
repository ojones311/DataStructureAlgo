//Check to see if a bracket is balanced

//Ex  '({{[]}})'is true but '{(])}' is false

//Loop through the string push str to stack Pop string off of stack and check to see if the original sting 
// and joined stacked are equal

const isBalanced = (str) => {
    let stack = []
    let checkerDict = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    for (let i = 0; i < str.length; i++){
        if(str[i] === '{' || str[i] === '[' || str[i] === '('){
            stack.push(str[i])
            console.log(str[i])
        }else {
            let end = stack.pop
        }    
    }
    for (symbol in stack){
        
    }
}

console.log(isBalanced('({{[]}})'))