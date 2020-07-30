//Write a function that takes in a factorial

const factorial = (n) => {
    if(n <= 0){
        return 1
    }
    return (n * factorial(n-1))   
}

console.log(factorial(10))
console.log(factorial(9))
console.log(factorial(4))
console.log(factorial(15))