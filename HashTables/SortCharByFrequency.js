
const frequencySort = function(s) {
    const obje = {}
    for (let i = 0; i < s.length; i++){
        let char = s.charAt(i)
        if(!obje[char]){
            obje[char] = 1
        }else{
            obje[char]++
        }
    }
    
    const newSort = Object.keys(obje).sort((a,b) => obje[b] - obje[a])
    
    let res = ''
    
    for(let i = 0; i < newSort.length; i++){
        const char = newSort[i]
        res += char.repeat(obje[char])
    }
    return res
};

console.log(frequencySort('abbddccchhyww'))
console.log(frequencySort('aabccc'))
console.log(frequencySort('abcdefg'))