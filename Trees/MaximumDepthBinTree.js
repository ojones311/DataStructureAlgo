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
    

    a.left = b;
    a.right = c;

    c.left = d;
    c.right = e;



const maxDepth = (root) => {
    let counter = 0 
    if (root === null){
        return 0
    }
}

