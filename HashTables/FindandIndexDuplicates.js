//Function take in an array and finds and indexes the duplicates in the arr

// arr =[0,0,1,2,3,4,4]
//obj = {0:[0,1],1:[2],2:[3],3:[4],4:[5,6]}

//gotta fix this !

const findDupes = (arr) => {
	let obj = {}
	let newArr = []
	for(let i = 0; i < arr.length; i++){
		if(!obj[arr[i]]){
			obj[arr[i]] = []
			obj[arr[i]].push(i)
		}else{
			obj[arr[i]].push(i)
		}
	}
	for(let elem in obj){
		if(obj[elem].length > 1){
			newArr.push({[elem]: obj[elem]})
		}
	}
	return newArr
}

console.log(findDupes([0,1,1,1,1,2,33,3,3]))
console.log(findDupes([1,1,2,2]))