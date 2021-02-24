//Return the text after replacing the entities by the special characters.

const entityParser = function(text) {
    let obj = {
        '&quot;': '"',
        '&apos;': "'",
        '&amp;': '&',
        '&gt;': '>',
        '&lt;': '<',
        '&frasl;': '/'
    }
    
    let replacer = new RegExp(Object.keys(obj).join('|'),"gi")
    text = text.replace(replacer,function(matched){
        return obj[matched]
    })
    return text
};

console.log(entityParser('x &gt; y &amp;&amp; x &lt; y is always false'))