//A binary tree is univalued if every node in the tree has the same value.

//Return true if and only if the given tree is univalued.

class TreeNode {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

    let a = new TreeNode(1);
    let b = new TreeNode(1);
    let c = new TreeNode(1);
    let d = new TreeNode(1);
    let e = new TreeNode(0);
    let f = new TreeNode(1)

    a.left = b;
    a.right = c;

    c.left = d;
    c.right = e;

    d.left = f;

// console.log(a,b,c,d,e,f)

const isUniValueTree = (root) => {
    let nodes = []
    const searchTree = (x) => {
        if(x){
            nodes.push(x.value)
            searchTree(x.left)
            searchTree(x.right)
        }
    } 
    const uniValueCheck = (arr) => {
        let result = arr.every(elem => elem === arr[0])
        return result
    }
    
    searchTree(root)
   return uniValueCheck(nodes)
}

console.log(isUniValueTree(a))