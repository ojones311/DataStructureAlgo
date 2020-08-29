//Given a sorted array and a target value, return the index if the target is found. 
//If not, return the index where it would be if it were inserted in order.

//Input: [1,3,5,6], 5
//Output: 2

const searchInsert = (arr, marker, target) => {
    let low = 0
    let high = arr.length - 1

    while (low <= high){
        let mid = Math.floor((low - high)/ 2)
        let guess = arr[mid]
        let marker = null

        if (guess === mid){
            return mid
        }else if(guess > target){
            high = mid - 1
            
        }else if(guess < target){
            low = mid + 1 
        }
    }
    return marker
}

searchInsert([0,1,3,5,6,8,12,21], 22)
searchInsert([6,24,78,96,100,530], 40)