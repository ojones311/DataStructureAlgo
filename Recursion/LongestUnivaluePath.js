//Given a binary tree, find the length of the longest path where each node in the path has the same value. 
// This path may or may not pass through the root.


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
    let e = new TreeNode(1);
    let f = new TreeNode(1);

    a.left = b;
    a.right = c;

    c.left = d;
    c.right = e;

    d.left = f;

const longestUnivaluePath = function(root) {
    let count = 0

    const longestPath = (node) => {
        
        if (!node){
            return 0
        }
        let maxLeft = longestPath(node.left)
        let maxRight = longestPath(node.right)

        let leftCount = 0
        let rightCount = 0

        if(node.left !== null && node.left.val === node.val){
            leftCount = maxLeft + 1
        }

        if(node.right !== null && node.right.val === node.val){
            rightCount = maxRight + 1
        }

         count = Math.max(count, leftCount + rightCount)

        return Math.max(maxLeft, maxRight)
    }
    longestPath(root)

    return count
};

console.log(longestUnivaluePath(a))