// Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).


class TreeNode {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

    let a = new TreeNode(1);
    let b = new TreeNode(2);
    let c = new TreeNode(3);
    let d = new TreeNode(5);
    let e = new TreeNode(10);
    let f = new TreeNode(21)

    a.left = b;
    a.right = c;

    c.left = d;
    c.right = e;

    d.left = f;

const rangeSumBST = (root, L, R) => {
    let sum = 0
    const searchTree = (root) => { 
        if(root.val >= L && root.val <= R){
            sum += root.val
        }
        if(root.left){
            searchTree(root.left)
        }
        if(root.right){
            searchTree(root.right)
        }  
    }
    searchTree(root)
    return sum
}

console.log(rangeSumBST(a,0,5))