//Find the different elements in two arrays and return it in a third arr

let nums1 = [0,1,2,3,4,5]
let nums2 = [0,2,4,6,8,10]

const arrayDiff = (arr1, arr2) => {
	let solutionArr = []
    for(let i = 0; i < arr1.length; i ++){
      let counter = 0
	    for(let j = 0; j < arr2.length; j++){
	        if(arr1[i] === arr2[j]){
		        counter ++
            }
        }
        if(counter === 0){
	        solutionArr.push(arr1[i])
        }
    }
    return solutionArr 
}


console.log(arrayDiff(nums1,nums2))