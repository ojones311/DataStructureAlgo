// Consider all the leaves of a binary tree.  From left to right order,the values of those leaves form a leaf value sequence.

class TreeNode {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

    let a = new TreeNode("A");
    let b = new TreeNode("B");
    let c = new TreeNode("C");
    let d = new TreeNode("D");
    let e = new TreeNode("E");
    let f = new TreeNode("F");
    let g = new TreeNode("G");
    let h = new TreeNode("H");
    let i = new TreeNode("I");
    let j = new TreeNode("J");
    let k = new TreeNode("K");


    a.left = b;
    a.right = g;

    b.left = c;
    b.right = f;

    c.left = d;
    c.right = e;

    g.left = h;
    g.right = k;

    h.left = i;
    h.right = j;

const leafSimilar = (root1, root2) => {
    const treeTraversal = (node, leaves) => {
        if (node){
            if(!node.left && !node.right){
                leaves.push(node.val)
            }
            treeTraversal(node.left, leaves)
            treeTraversal(node.right,leaves)
        }
    }
    let leavesOne = []
    let leavesTwo = []
    treeTraversal(root1, leavesOne)
    treeTraversal(root2, leavesTwo)

    return (leavesOne.length === leavesTwo.length && 
        leavesOne.every((a, i) => a === leavesTwo[i]))
}

console.log(leafSimilar(a,a))