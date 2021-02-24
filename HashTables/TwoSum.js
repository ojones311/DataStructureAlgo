// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

var twoSum = function(nums, target) {
    let obj = {}
    for (let i = 0; i < nums.length; i++){
        obj[nums[i]] = i 
    }
    // console.log(obj,nums)
    for (let i = 0; i < nums.length; i++){
        let diff = target - nums[i]
        if((diff in obj) && obj[diff] !== i){
            return [i, obj[diff]]
        }
    }
    return null
};


 


console.log(twoSum([2,7,11,15], 13))
console.log(twoSum([2,7,11,15], 12))
console.log(twoSum([2,7,11,15], 22))
console.log(twoSum([2,7,11,15], 30))