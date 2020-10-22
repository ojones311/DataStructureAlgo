//Given an array nums of integers, return how many of them contain an even number of digits.

//Ex: [12, 123, 45, 3, 4, 5678]
//Output: 3


const findEvenNumberOfDigits = (arr) => {
    let count = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i].toString().length % 2 === 0){
            count ++
        }
    }
    return count
}

console.log(findEvenNumberOfDigits([12,13,14,156,15678,9009]))