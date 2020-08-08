//Function take in an array and finds and indexes the duplicates in the arr

//gotta fix this !
const findAndIndexDupes = (arr) => {
	let obj = {}
	for(elem of arr){
	    if(!obj[arr[elem]]){
	        obj[arr[elem]] = []
	        obj[arr[elem]].push(elem)
        } else {
        obj[arr[elem]].push(elem)
    }
}
    for(key in obj){
	    if(obj[key].length >= 1){
	        delete key
        }
    }

return obj

}

console.log(findAndIndexDupes([1,1,2,2]))