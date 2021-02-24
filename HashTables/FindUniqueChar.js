//Given a string, find the first non-repeating character in it and return its index. 
// If it doesn't exist, return -1.

const firstUniqChar = function(s) {
    let obj = {}
    for (let i = 0; i < s.length; i++){
        if(!obj[s[i]] ){
            obj[s[i]] = 1
        }else {
            obj[s[i]]++
        }
    }
    for( let i = 0; i < s.length; i++ ){
       if(obj[s[i]] === 1) {
           return i
       }
    }
    return -1
};