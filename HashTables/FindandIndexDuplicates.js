//Function take in an array and finds and indexes the duplicates in the arr

// arr =[0,0,1,2,3,4,4]
//obj = {0:[0,1],1:[2],2:[3],3:[4],4:[5,6]}

//gotta fix this !
const findAndIndexDupes = (arr) => {
	let obj = {}
	for(let [i,elem] of arr.entries()){
	    if(!obj[arr[elem]]){
	        obj[arr[elem]] = []
	        obj[arr[elem]].push(i)
        } else {
        obj[arr[elem]].push(i)
    }
}
    for(let key in obj){
	    if(obj[key].length >= 1){
	        delete key
        }
    }

return obj

}

console.log(findAndIndexDupes([1,1,2,2]))