//Given a sorted array and a target value, return the index if the target is found. 
//If not, return the index where it would be if it were inserted in order.

//Input: [1,3,5,6], 4
//Output: 2

const searchInsert = (arr, target) => {
    let low = 0
    let high = arr.length - 1
    let mid;

    while (low <= high){
        mid = Math.floor((low + high)/ 2)
        let guess = arr[mid]

        if (guess === target){
            return mid 
        
        }else if(guess > target){
            high = mid - 1

        }else if(guess < target){
            low = mid + 1 
        }
    }

    return low
}


console.log(searchInsert([0,1,3,5,6,8,12,21], 22))
console.log(searchInsert([6,24,78,96,100,530], 40))
console.log(searchInsert([1,3,5,6], 4))
console.log(searchInsert([1,3,5,6], 7))
console.log(searchInsert([1,3,5,6], 5))