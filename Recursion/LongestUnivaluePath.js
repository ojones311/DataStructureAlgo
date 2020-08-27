//Given a binary tree, find the length of the longest path where each node in the path has the same value. 
// This path may or may not pass through the root.


class TreeNode {
    constructor(value, left, right){
        this.value = value
        this.left = left
        this.right = right
    }
}

// let a = new TreeNode(1,b,c)
// let b = new TreeNode(2,)
// let c
// let d
// let e
// let f 
// let g

const longestUnivaluePath = function(root) {
    if (root === null || root === undefined){
        return 0
    }
    
    
    longestUnivaluePath(root.left)
    longestUnivaluePath(root.right)
};