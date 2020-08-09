//Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

//Input: arr = [1,2,2,1,1,3]
//Output: true
// Input: arr = [1,2]
// Output: false

const uniqueOccurences = (arr) => {
    let obj = {}
    for (let i = 0; i < arr.length; i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = 1
        } else{
            obj[arr[i]] ++
        }
    }
    console.log(obj)
    let checker = []
    for (num in obj){
        checker.push(obj[num])
    }
    console.log(checker)

   let solution = [...new Set(checker)]
   console.log(solution)
 
   return solution.length == checker.length
}

console.log(uniqueOccurences([0,1,1,2,2,2]))
console.log(uniqueOccurences([0,1,1,2,2,2,3,3,3,3]))
console.log(uniqueOccurences([0,1,1,2,2,2,5,7,8,8]))



