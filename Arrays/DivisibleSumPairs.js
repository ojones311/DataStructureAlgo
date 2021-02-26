//Given an array of integers and a positive integer , determine the number of pairs 
//where i < j and arr[i] + arr[j] is divisible by .

function divisibleSumPairs(n, k, ar) {
    let count = 0
    for(let i = 0; i < n; i++){
        for(let j = (i + 1); j < n; j++){
            if((ar[i] + ar[j]) % k === 0){
                count++
            }
        }
    }
     return count
}

//Expecting 7
console.log(divisibleSumPairs(8,4,[0,12,13,44,54,78,109,200]))

//Expecting 1
console.log(divisibleSumPairs(4,4,[1,2,3,4]))