// tree traversal
// Breath first Search
//  all tree traversal code should be inputted to a tree class
BFS() {
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push(node);
    while(queue.length){
        node = queue.shift();
        data.push(node);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    return data;
}

// Depth first Search

// DFS preorder

DFSPreOrder() {
    let data = [];
    function traverse(node){
        // difference between Preorder and Post order is the placement of the line below
        data.push(node.value);
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
}

// DFS Post Order
DFSPostOrder() {
    let data = [];
    function traverse(node){
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        data.push(node.value);
        // difference between Preorder and Post order is the placement of the line above
    }
    traverse(this.root);
    return data;
}

// Depth first InOrder 
DFSInOrder() {
    let data = [];
    function traverse(node){
        if(node.left) traverse(node.left);
        data.push(node.value);
        // difference between DFS is that push is between ledt and right traverse
        if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
}
