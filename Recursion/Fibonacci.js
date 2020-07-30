//  Write a fibonacci function 

const fibonacci = (num) => {
    if(num <= 1){
        return num
    }
    return fibonacci(num - 1) + fibonacci(num -2)
}

console.log(fibonacci(4))
console.log(fibonacci(10))
console.log(fibonacci(8))

// Must fix the return 
// const memoFib = (num, obj) =>{
//     obj = obj || {}
//     if(obj[num]){
//         console.log('memo obj',obj)
//         return obj[num]
//     }
//     if(num <= 1){
//         return 1
//     }
//     return obj[num] = memoFib(num-1, obj) + memoFib(num-2, obj)
// }

// console.log(memoFib(4))
// console.log(memoFib(14))
// console.log(memoFib(40))