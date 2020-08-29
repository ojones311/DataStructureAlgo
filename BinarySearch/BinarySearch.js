//Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. 
//If target exists, then return its index, otherwise return -1.


const binarySearch = (arr, target) => {
    let low = 0
    let high = arr.length - 1

    while (low <= high){
        let mid = Math.floor((low + high)/ 2)
        let guess = arr[mid]

        if (guess === target){
            return mid
        }else if(guess > target){
            high = mid - 1
        }else {
            low = mid + 1 
        }
    }
    return -1
}

console.log(binarySearch([0,1,2,3,4,5,6,7,8], 0))
console.log(binarySearch([0,1,2,3,4,5,6,7,8], 5))