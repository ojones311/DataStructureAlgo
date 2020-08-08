//Breadth first search 

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

//if node exists in the tree return true
    function findDataBFS(tree, number) {
        var queue = [tree];
    
        while (queue.length > 0) {
            var end = queue.shift();
            if (end.value == number.value){
                console.log(end)
                return true;
            }
            if (end.left) {
                queue.push(end.left);
            }
            if (end.right) {
                queue.push(end.right);
            }
        }
        return false;
    }
    
 
  console.log(findDataBFS(a,b))
  console.log(findDataBFS(a,c))
  console.log(findDataBFS(a,e))
  console.log(findDataBFS(a,g))
  console.log(findDataBFS(a,'hello'))
  console.log(findDataBFS(a,arr))
