//Given an array return the longest sequence of consecutive integers

const longestSequence = (arr) => {
    let longestCount = 0
    let currentCount = 1
  
    for (let i = 0; i < arr.length; i++){
      if(currentCount > longestCount){
        longestCount = currentCount
      }
      if(arr[i] === arr[i + 1]){
        currentCount ++
      }else{
        currentCount = 1
      }
    }
    return longestCount
  }
  
  console.log(longestSequence([1,1,2,2,2,3]))
  //Expected: 3
  console.log(longestSequence([1,1,2,2,3]))
  //Expected: 2
  console.log(longestSequence([]))
  // Expected: 0