class Stack {
    constructor(){
        this.elements = []
    }

    push(element){
        this.elements.push(element)
    }
    
    pop(){
        return this.elements.pop()
    }
    
    peek(){
        return this.elements[this.elements.length - 1]
    }
    
    size(){
        return this.elements.length
    }
    
    print(){
        let str = ''
        for (let i = 0; i < this.elements.length; i++){
            str += this.elements[i] + ''
        }
        return str
    }
}

let myStack = new Stack()


module.exports = {
    myStack
}