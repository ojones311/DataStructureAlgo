// Given an integer array arr that is guaranteed to be a mountain, return any i such that 
// arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

var peakIndexInMountainArray = function(A) {
    return A.indexOf(Math.max(...A))
};

const peakIndexInMountainArray = () => {
    
}