class Stack {
    constructor(){
        this.elements = []
    }

    push(element){
        this.elements.push(element)
    }
    
    pop(){
        this.elements.pop()
    }
    
    peek(){
        return this.elements[this.elements.length - 1]
    }
    
    isEmpty(){
        if(this.elements.length > 0){
            return false
        }else {
            return true
        }
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

myStack.push(1)
myStack.push(2)
myStack.push(8)
myStack.push(9)


console.log(myStack)

myStack.pop()

console.log(myStack.print())

// console.log()