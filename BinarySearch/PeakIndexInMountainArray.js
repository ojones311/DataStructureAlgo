// Given an integer array arr that is guaranteed to be a mountain, return any i such that 
// arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

// var peakIndexInMountainArray = function(A) {
//     return A.indexOf(Math.max(...A))
// };


const peakIndexInMountainArray = (arr) => {
    let low = 0
    let high = arr.length - 1

    while(low < high){
        let mid = Math.floor((high + low ) / 2)

        if(arr[mid] < arr[mid + 1]){
            low = mid + 1
        
        }else {
            high = mid
        }    
    } 
    return low
}

console.log(peakIndexInMountainArray([0,1,2,3,2,1,0]))
console.log(peakIndexInMountainArray([0,1,0]))