//Given a binary tree find its maximum depth

//Input [3,9,20,null,null,15,7]

class TreeNode {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

    let a = new TreeNode(3);
    let b = new TreeNode(9);
    let c = new TreeNode(20);
    let d = new TreeNode(15);
    let e = new TreeNode(7);
    let f = new TreeNode(6)

    a.left = b;
    a.right = c;

    c.left = d;
    c.right = e;

    d.left = f;


const maxDepth = (root) => {
    const recursiveTraversal = (x) => {
        if(!x){
            return 0
        }
        // console.log(x.value)
        let leftDepth = recursiveTraversal(x.left)
        let rightDepth = recursiveTraversal(x.right)

        if(leftDepth > rightDepth){
            return leftDepth + 1
        } else{
            return rightDepth + 1
        }
    }
    return recursiveTraversal(root)
}

console.log(maxDepth(a))