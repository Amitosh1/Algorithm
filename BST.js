class Node {
    constructor(value) {
        this.value = value;
        this.left = undefined;
        this.right = undefined;
    }
}

class BST {
    constructor(value) {
        this.root = new Node(value);
    }

    insert(value) {
        function helper(elem) {
            if (elem.value < value) {
                if (elem.right) {
                    helper(elem.right);
                } else {
                    elem.right = new Node(value);
                }

            } else if (elem.value > value) {
                if (elem.left) {
                    helper(elem.left);
                } else {
                    elem.left = new Node(value);
                }
            }
        }
        helper(this.root);
    }

    BSTBredthSort() {
        var checked = [this.root];
        var final = [];
        function helper() {
            var top = checked.shift();
            if (top) {
                final.push(top.value);
                top.left && checked.push(top.left);
                top.right && checked.push(top.right);
                helper();
            }
        }

        helper();
        return final;
    }
    // pre order put left first and then right side
    DFSPreOrder() {
        var checked = [];
        function helper(node) {
            checked.push(node.value);
            node.left && helper(node.left);
            node.right && helper(node.right);
        }

        helper(this.root);
        return checked;
    }

    // post order start from left and all bottom first and then up.
    DFSPostOrder() {
        var checked = [];
        function helper(node) {
            node.left && helper(node.left);
            node.right && helper(node.right);
            checked.push(node.value);
        }

        helper(this.root);
        return checked;
    }

        // in order start from left and all bottom first and then up.
    DFSinOrder() {
        var checked = [];
        function helper(node) {
            node.left && helper(node.left);
            checked.push(node.value);
            node.right && helper(node.right);

        }

        helper(this.root);
        return checked;
    }
}

var bst = new BST(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
//bst.BSTBredthSort();
