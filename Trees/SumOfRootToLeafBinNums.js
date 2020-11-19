// You are given the root of a binary tree where each node has a value 0 or 1. 
// Each root-to-leaf path represents a binary number starting with the most significant bit.
//Return the sum of these numbers

class TreeNode {
    constructor(val){
        this.val = val
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

const sumRootToLeaf = (root) => {
    let binNums = []
    const treeTraversal = (x, str) => {
        if(!x){
            return 0
        }
        
        let num = str + x.val
        if(!x.left && !x.right){
            binNums.push(num)
        }
        treeTraversal(x.left, num)
        treeTraversal(x.right, num)
        
    }
    treeTraversal(root, '')
    
    return binNums.reduce((sum,binary) => {
       sum += parseInt(binary, 2);
        return sum
    }, 0)
}; 

console.log(sumRootToLeaf(a))