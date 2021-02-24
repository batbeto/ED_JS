class Node{
    constructor(data, left=null, right= null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }
    add(data){
        const node = this.root;
        if (node == null){
            return this.root = new Node(data);
        } else {
            const searchTree = (node) => {
                if (data< node.data){
                    if (node.left === null){
                        return node.left = new Node(data);
                    } else if (node.left != null){
                        return searchTree(node.left);
                    } 
                } else if (data > node.data){
                    if (node.right === null){
                        return node.right = new Node(data);
                    } else if (node.right != null){
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    findMin(){
        let min = this.root;
        while (min.left != null){
            min = min.left;
        }
        return min.data;
    }

    findMax(){
        let max = this.root;
        while (min.right != null){
            max = max.right;
        }
        return max.data;
    }

    findData(data){
        let atual = this.root;
        while (atual.data != data){
            if (data < atual.data){
                atual = atual.left;
            } else {
                atual = atual.right;
            }
            if (atual === null){
                return null;
            }
        }
        return atual;
    }

    isPresent(data){
        let atual = this.root;
        while (atual){
            if (data === atual.data) return true;
            if (data < atual.data) {
                atual = atual.left;
            }else{
                atual = atual.right;
            }
        }
        return false;
    }

    remove (data){
        let removeNode = (node, data) => {
            if (node == null) return null;
            if (data === node.data){
                if (node.left === null && node.right === null) return null; //sem filhos
                if (node.left === null) return node.right; // com filho a direita
                if (node.right === null) return node.left; // com filho a esquerda
                //com os dois filhos
                var tempNode = node.right;
                while(node.left != null){
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data){
                node.left = removeNode(node.left, data);
                return node;
            } else{
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }

    findMinSize(node = this.root){
        if (node == null) return -1

        let left = this.findMinSize(node.left);
        let right = this.findMinSize(node.right);

        if (left < right){
            return left +1;
        } else {
            return right +1;
        }
    }

    findMaxSize(node = this.root){
        if (node == null) return -1;

        let left = this.findMaxSize(node.left);
        let right = this.findMaxSize(node.right);

        if (left > right){
            return left +1;
        } else{
            return right +1;
        }
    }

    isBalanced(){
        return (this.findMinSize() >= this.findMaxSize() -1)
    }

    inOrder(){
        if (this.root == null) return null;
        else{
            var result = new Array();
            function traverseInOrder(node){
                node.left && traverseInOrder(node.left);
                result.push(node.data);
                node.right && traverseInOrder(node.right);
            }
            traverseInOrder(this.root);
            return result;
        }
    }

    preOrder(){
        if (this.root == null) return null;
        else{
            var result = new Array();
            function traversePreOrder(node) {
                result.push(node.data);
                node.left && traversePreOrder(node.left);
                node.right && traversePreOrder(node.right);
            }
            traversePreOrder(this.root);
            return result;
        }
    }

    postOrder() {
        if (this.root == null) return null;
        else {
          var result = new Array();
          function traversePostOrder(node) {
            node.left && traversePostOrder(node.left);
            node.right && traversePostOrder(node.right);
            result.push(node.data);
          };
          traversePostOrder(this.root);
          return result;
        }
    }

    levelOrder() {
        let result = [];
        let X = []; 
        if (this.root != null) {
            X.push(this.root);
            while(X.length > 0) {
                let node = X.shift();
                result.push(node.data);
                if (node.left != null) {
                    X.push(node.left);
                }
                if (node.right != null) {
                    X.push(node.right);
                }
            }
            return result;
        } else {
            return null;
        }
    }
}

const binaryTree = new BinaryTree();


binaryTree.add(9);
binaryTree.add(4);
binaryTree.add(17);
binaryTree.add(3);
binaryTree.add(6);
binaryTree.add(22);
binaryTree.add(5);
binaryTree.add(7);
binaryTree.add(20);

console.log(binaryTree.findMinSize());
console.log(binaryTree.findMaxSize());
console.log(binaryTree.isBalanced());
binaryTree.add(10);
console.log(binaryTree.findMinSize());
console.log(binaryTree.findMaxSize());
console.log(binaryTree.isBalanced());
console.log('inOrder: ' + binaryTree.inOrder());
console.log('preOrder: ' + binaryTree.preOrder());
console.log('postOrder: ' + binaryTree.postOrder());

console.log('levelOrder: ' + binaryTree.levelOrder());