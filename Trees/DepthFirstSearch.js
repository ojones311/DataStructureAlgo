//Depth first tree traversal 
class TreeNode {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
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

    let z = 'hello'
    let arr = [1,2,3,4,5,6]

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

//If letter param exists in the true return true if not return false
// function findDataDFS(tree, letter) {
//     var stack = [tree];
  
//     while (stack.length > 0) {
//       var end = stack.pop();
//       if (end.value == letter.value){
//         console.log(end) 
//         return true;
//       }
//       if (end.left) {
//         stack.push(end.left);
//       }
//       if (end.right) {
//         stack.push(end.right);
//       }
//     }
//     return false
// }

//Recursive


const depthFSRecursive = (root, letter) => {
    let res = null
    const treeTraversal = (x) => {
        if(!x){
            return
        }
        treeTraversal(x.left)
        if(x.value == letter.value){
            res = x
            return
        }
        treeTraversal(x.right)
    }
   treeTraversal(root)
   return res
}

// console.log(findDataDFS(a,z))
// console.log(findDataDFS(a,b))
// console.log(findDataDFS(a,e))
// console.log(findDataDFS(a,f))
// console.log(findDataDFS(a,arr))
// console.log('---------------------')

console.log(depthFSRecursive(a,e))