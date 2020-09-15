//Check to see if a bracket is balanced

//Ex  '({{[]}})'is true but '{(])}' is false
//import stack class

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
        }else {
            let end = stack.pop()
            if(str[i] !== checkerDict[end]){
                return false
            };
        }    
    }
    if (stack.length !== 0 ){
        return false
    }
    return true
}

console.log(isBalanced('{[([{[]}])]}'))
console.log(isBalanced('[][][({[(}]))]{]'))
