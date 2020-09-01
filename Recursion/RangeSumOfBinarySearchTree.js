// Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).


class TreeNode {
    constructor(value){
        this.value = value
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
    let arr = []

    const searchTree = (x) => {
        if (x){
            if(x.value >= L && x.value <= R){
                arr.push(x.value)
            }
            searchTree(x.left)
            searchTree(x.right)
        }
    }
    const addValues = (arr) => {
        console.log(arr)
        let sum = 0
        for (let i = 0; i < arr.length; i++){
            sum += arr[i]
        }
        return sum
    }
    searchTree(root)
    return addValues(arr)
}

console.log(rangeSumBST(a,0,5))