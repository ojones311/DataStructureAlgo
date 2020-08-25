//Check if a string is a palindrome using a stack 

const checkPalindrome = (str) => {
    let stack = []; 
    let rword = ""; 
    for(let i = 0; i < str.length; i++){
        stack.push(str[i]);
    }
    for(let i = 0; i < str.length; i++){
        rword += stack.pop();
    }
    if (rword === str){
        return true 
    }
    return false
}

console.log(checkPalindrome('racecar'))
console.log(checkPalindrome('hello'))