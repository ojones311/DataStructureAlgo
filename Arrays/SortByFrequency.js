/* 
//Initialize a hash 
//Loop through the array 
//if number doesnt exist in the hash add and and assign a count of 1
//if number does add to the count 
//Look for the number with the lowest frequency and push it into solution array
//if frequency is the same then push the lower number 
//Need to sort by the frequency they appear in the object
// obj ={1:2, 2:3, 3:1}
*/

const frequencySort = function(nums) {
    let obj = {}
    let sorted = []
    
    for (let i = 0; i < nums.length; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = 1
        }else{
            obj[nums[i]]++
        }
    }
    
    sorted = nums.sort(function compareNums(a,b){
        if(obj[a] === obj[b]){
            return b - a
        }
       return obj[a] - obj[b] 
    })
    return sorted
};

console.log(frequencySort([1,1,1,2,3,3,4]))
console.log(frequencySort([1,2,3,4,4,4,5,5]))